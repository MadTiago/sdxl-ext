import copy
import os
import torch
from pathlib import Path
from modules import devices

from scripts.adapter import PlugableAdapter, Adapter, StyleAdapter, Adapter_light
from scripts.controlnet_lllite import PlugableControlLLLite
from scripts.cldm import PlugableControlModel
from scripts.controlmodel_ipadapter import PlugableIPAdapter
from scripts.logging import logger
from scripts.controlnet_diffusers import convert_from_diffuser_state_dict
from scripts.controlnet_lora import controlnet_lora_hijack, force_load_state_dict

controlnet_default_config = {'adm_in_channels': None,
                             'in_channels': 4,
                             'model_channels': 320,
                             'num_res_blocks': 2,
                             'attention_resolutions': [1, 2, 4],
                             'transformer_depth': [1, 1, 1, 0],
                             'channel_mult': [1, 2, 4, 4],
                             'transformer_depth_middle': 1,
                             'use_linear_in_transformer': False,
                             'context_dim': 768,
                             "num_heads": 8,
                             "global_average_pooling": False}

controlnet_sdxl_config = {'num_classes': 'sequential',
                          'adm_in_channels': 2816,
                          'in_channels': 4,
                          'model_channels': 320,
                          'num_res_blocks': 2,
                          'attention_resolutions': [2, 4],
                          'transformer_depth': [0, 2, 10],
                          'channel_mult': [1, 2, 4],
                          'transformer_depth_middle': 10,
                          'use_linear_in_transformer': True,
                          'context_dim': 2048,
                          "num_head_channels": 64,
                          "global_average_pooling": False}

controlnet_sdxl_mid_config = {'num_classes': 'sequential',
                              'adm_in_channels': 2816,
                              'in_channels': 4,
                              'model_channels': 320,
                              'num_res_blocks': 2,
                              'attention_resolutions': [4],
                              'transformer_depth': [0, 0, 1],
                              'channel_mult': [1, 2, 4],
                              'transformer_depth_middle': 1,
                              'use_linear_in_transformer': True,
                              'context_dim': 2048,
                              "num_head_channels": 64,
                              "global_average_pooling": False}

controlnet_sdxl_small_config = {'num_classes': 'sequential',
                                'adm_in_channels': 2816,
                                'in_channels': 4,
                                'model_channels': 320,
                                'num_res_blocks': 2,
                                'attention_resolutions': [],
                                'transformer_depth': [0, 0, 0],
                                'channel_mult': [1, 2, 4],
                                'transformer_depth_middle': 0,
                                'use_linear_in_transformer': True,
                                "num_head_channels": 64,
                                'context_dim': 1,
                                "global_average_pooling": False}

t2i_adapter_config = {
    'channels': [320, 640, 1280, 1280],
    'nums_rb': 2,
    'ksize': 1,
    'sk': True,
    'cin': 192,
    'use_conv': False
}

t2i_adapter_light_config = {
    'channels': [320, 640, 1280, 1280],
    'nums_rb': 4,
    'cin': 192,
}

t2i_adapter_style_config = {
    'width': 1024,
    'context_dim': 768,
    'num_head': 8,
    'n_layes': 3,
    'num_token': 8,
}


def build_model_by_guess(state_dict, unet, model_path):
    if "lora_controlnet" in state_dict:
        del state_dict['lora_controlnet']
        config = copy.deepcopy(controlnet_sdxl_config)
        logger.info('controlnet_sdxl_config (using lora)')
        config['global_average_pooling'] = False
        config['hint_channels'] = int(state_dict['input_hint_block.0.weight'].shape[1])
        config['use_fp16'] = devices.dtype_unet == torch.float16
        with controlnet_lora_hijack():
            network = PlugableControlModel(config, state_dict=None)
        force_load_state_dict(network.control_model, state_dict)
        network.is_control_lora = True
        network.to(devices.dtype_unet)
        return network

    if "controlnet_cond_embedding.conv_in.weight" in state_dict:
        state_dict = convert_from_diffuser_state_dict(state_dict)

    model_has_shuffle_in_filename = 'shuffle' in Path(os.path.abspath(model_path)).stem.lower()
    state_dict = {k.replace("control_model.", ""): v for k, v in state_dict.items()}
    state_dict = {k.replace("adapter.", ""): v for k, v in state_dict.items()}

    if 'input_hint_block.0.weight' in state_dict:
        if 'label_emb.0.0.bias' not in state_dict:
            config = copy.deepcopy(controlnet_default_config)
            logger.info('controlnet_default_config')
            config['global_average_pooling'] = model_has_shuffle_in_filename
            config['hint_channels'] = int(state_dict['input_hint_block.0.weight'].shape[1])
            config['context_dim'] = int(state_dict['input_blocks.5.1.transformer_blocks.0.attn2.to_k.weight'].shape[1])
            for key in state_dict.keys():
                p = state_dict[key]
                if 'proj_in.weight' in key or 'proj_out.weight' in key:
                    if len(p.shape) == 2:
                        p = p[..., None, None]
                state_dict[key] = p
        else:
            has_full_layers = 'input_blocks.8.1.transformer_blocks.9.norm3.weight' in state_dict
            has_mid_layers = 'input_blocks.8.1.transformer_blocks.0.norm3.weight' in state_dict
            if has_full_layers:
                config = copy.deepcopy(controlnet_sdxl_config)
                logger.info('controlnet_sdxl_config')
            elif has_mid_layers:
                config = copy.deepcopy(controlnet_sdxl_mid_config)
                logger.info('controlnet_sdxl_mid_config')
            else:
                config = copy.deepcopy(controlnet_sdxl_small_config)
                logger.info('controlnet_sdxl_small_config')
            config['global_average_pooling'] = False
            config['hint_channels'] = int(state_dict['input_hint_block.0.weight'].shape[1])

        if 'difference' in state_dict and unet is not None:
            unet_state_dict = unet.state_dict()
            unet_state_dict_keys = unet_state_dict.keys()
            final_state_dict = {}
            for key in state_dict.keys():
                p = state_dict[key]
                if key in unet_state_dict_keys:
                    p_new = p + unet_state_dict[key].clone().cpu()
                else:
                    p_new = p
                final_state_dict[key] = p_new
            state_dict = final_state_dict

        config['use_fp16'] = devices.dtype_unet == torch.float16

        network = PlugableControlModel(config, state_dict)
        network.to(devices.dtype_unet)
        return network

    if 'conv_in.weight' in state_dict:
        logger.info('t2i_adapter_config')
        cin = int(state_dict['conv_in.weight'].shape[1])
        channel = int(state_dict['conv_in.weight'].shape[0])
        ksize = 1
        down_opts = tuple(filter(lambda item: item.endswith("down_opt.op.weight"), state_dict))
        use_conv = len(down_opts) > 0
        is_sdxl = (cin % 256) == 0
        adapter = Adapter(
            cin=cin,
            channels=[channel, channel*2, channel*4, channel*4],
            nums_rb=2,
            ksize=ksize,
            sk=True,
            use_conv=use_conv,
            is_sdxl=is_sdxl
        ).cpu()
        adapter.load_state_dict(state_dict, strict=False)
        network = PlugableAdapter(adapter)
        return network

    if 'style_embedding' in state_dict:
        config = copy.deepcopy(t2i_adapter_style_config)
        logger.info('t2i_adapter_style_config')
        adapter = StyleAdapter(**config).cpu()
        adapter.load_state_dict(state_dict, strict=False)
        network = PlugableAdapter(adapter)
        return network

    if 'body.0.in_conv.weight' in state_dict:
        config = copy.deepcopy(t2i_adapter_light_config)
        logger.info('t2i_adapter_light_config')
        config['cin'] = int(state_dict['body.0.in_conv.weight'].shape[1])
        adapter = Adapter_light(**config).cpu()
        adapter.load_state_dict(state_dict, strict=False)
        network = PlugableAdapter(adapter)
        return network

    if 'ip_adapter' in state_dict:
        plus = "latents" in state_dict["image_proj"]
        if plus:
            channel = int(state_dict['image_proj']['proj_in.weight'].shape[1])
        else:
            channel = int(state_dict['image_proj']['proj.weight'].shape[1])
        network = PlugableIPAdapter(state_dict, channel, plus)
        network.to('cpu')
        return network

    if any('lllite' in k for k in state_dict.keys()):
        network = PlugableControlLLLite(state_dict)
        network.to('cpu')
        return network

    raise '[ControlNet Error] Cannot recognize the ControlModel!'

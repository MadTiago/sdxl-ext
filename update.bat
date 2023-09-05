@echo off

REM curl -L http://github.com/[username]/[repo]/archive/[branch].tar.gz | tar zxf -
REM wget http://github.com/[username]/[repo]/archive/[branch].zip

echo Updating sd-civitai-browser...
rmdir /S /Q sd-civitai-browser
curl -L http://github.com/camenduru/sd-civitai-browser/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-civitai-browser-main sd-civitai-browser
echo.

echo Updating tunnels...
rmdir /S /Q tunnels
curl -L https://github.com/camenduru/tunnels/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren tunnels-main tunnels
echo.

echo Updating batchlinks-webui...
rmdir /S /Q batchlinks
curl -L https://github.com/etherealxx/batchlinks-webui/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren batchlinks-webui-main batchlinks
echo.

echo Updating adetailer...
rmdir /S /Q adetailer
curl -L https://github.com/Bing-su/adetailer/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren adetailer-main adetailer
echo.

echo Updating model_preset_manager...
rmdir /S /Q model_preset_manager
curl -L https://github.com/rifeWithKaiju/model_preset_manager/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren model_preset_manager-main model_preset_manager
echo.

echo Updating canvas-zoom...
rmdir /S /Q canvas-zoom
curl -L https://github.com/richrobber2/canvas-zoom/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren canvas-zoom-main canvas-zoom
echo.

echo Updating sd-extension-system-info...
rmdir /S /Q system-info
curl -L https://github.com/vladmandic/sd-extension-system-info/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-extension-system-info-main system-info
echo.

echo Updating stable-diffusion-webui-wildcards...
rmdir /S /Q wildcards
curl -L https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards/archive/master.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren stable-diffusion-webui-wildcards-master wildcards
echo.

echo Updating stable-diffusion-webui-rembg...
rmdir /S /Q rembg
curl -L https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg/archive/master.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren stable-diffusion-webui-rembg-master rembg
echo.

echo Updating sd-webui-aspect-ratio-helper...
rmdir /S /Q aspect-ratio-helper
curl -L https://github.com/thomasasfk/sd-webui-aspect-ratio-helper/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-webui-aspect-ratio-helper-main aspect-ratio-helper
echo.

echo Updating sd-webui-controlnet...
rmdir /S /Q controlnet
curl -L https://github.com/Mikubill/sd-webui-controlnet/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-webui-controlnet-main controlnet
echo.

echo Updating sd-webui-3d-open-pose-editor...
rmdir /S /Q 3d-open-pose-editor
curl -L https://github.com/nonnonstop/sd-webui-3d-open-pose-editor/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-webui-3d-open-pose-editor-main 3d-open-pose-editor
echo.

echo Updating stable-diffusion-webui-images-browser...
rmdir /S /Q images-browser
curl -L https://github.com/AlUlkesh/stable-diffusion-webui-images-browser/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren stable-diffusion-webui-images-browser-main images-browser
echo.

echo Updating sd-webui-inpaint-anything...
rmdir /S /Q inpaint-anything
curl -L https://github.com/Uminosachi/sd-webui-inpaint-anything/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren sd-webui-inpaint-anything-main inpaint-anything
echo.

echo Updating a1111-sd-webui-tagcomplete...
rmdir /S /Q tagcomplete
curl -L https://github.com/DominikDoom/a1111-sd-webui-tagcomplete/archive/main.tar.gz -o tmp.tar.gz
tar zxf tmp.tar.gz && ren a1111-sd-webui-tagcomplete-main tagcomplete
echo.

REM git clone https://github.com/camenduru/sd-civitai-browser sd-civitai-browser
REM git clone https://github.com/camenduru/tunnels tunnels
REM git clone https://github.com/etherealxx/batchlinks-webui batchlinks-webui

REM git clone https://github.com/Bing-su/adetailer adetailer
REM git clone https://github.com/rifeWithKaiju/model_preset_manager model_preset_manager
REM git clone https://github.com/richrobber2/canvas-zoom canvas-zoom
REM git clone https://github.com/vladmandic/sd-extension-system-info system-info
REM git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui-wildcards wildcards
REM git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg rembg
REM git clone https://github.com/thomasasfk/sd-webui-aspect-ratio-helper aspect-ratio-helper
REM git clone https://github.com/Mikubill/sd-webui-controlnet controlnet
REM git clone https://github.com/nonnonstop/sd-webui-3d-open-pose-editor 3d-open-pose-editor
REM git clone https://github.com/AlUlkesh/stable-diffusion-webui-images-browser images-browser
REM git clone https://github.com/Uminosachi/sd-webui-inpaint-anything inpaint-anything
REM git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete tagcomplete

REM https://stackoverflow.com/questions/26526252/run-git-pull-over-all-subdirectories-windows-command-promt
REM for /D %%G in ("*") do (echo %%G) && (cd %%G) && (git pull) && echo. && (cd ..)

REM Delete tmp file after all updating is done...
echo Removing tmp.tar.gz
del /F /Q tmp.tar.gz

echo DONE!
pause
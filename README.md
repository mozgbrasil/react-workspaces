[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"

![valid XHTML][checkmark]

[getcomposer]: https://getcomposer.org/
[uninstall-mods]: https://getcomposer.org/doc/03-cli.md#remove

# MOZG | React Diamonds

## Sinopse

Automações usando [React](https://react.org/)

## Motivação

Evangelizar a plataforma [React](https://react.org/) ...

## Descrição

Um aplicativo [React](https://react.org/) ...

## Instalando a Web-Extension

No chrome, conforme https://developer.chrome.com/extensions/

Acesse

    chrome://extensions

Ative "developer mode"

Clique em "Carregar sem compactação" e selecione a pasta contendo a extensão

No firefox, conforme https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/sua_primeira_WebExtension

Acesse

    about:debugging#/runtime/this-firefox

Clique em "Load Add-on" e selecione a pasta contendo a extensão

## https://github.com/mozilla/web-ext

    cd /home/marcio/dados/projects/javascripts/lerna-monorepo/packages/react-labs

    web-ext run --source-dir ./build-web-extension/

    web-ext lint --source-dir ./build-web-extension/

## Perguntas mais frequentes "FAQ"

### Sobre a Privacy Policy

https://www.privacypolicytemplate.net/

### Sobre a Web-Extension

https://developer.chrome.com/extensions/

https://developer.chrome.com/extensions/manifest

https://chrome.google.com/webstore/devconsole/register?hl=pt-BR

https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions

https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/sua_primeira_WebExtension

    addons-linter /home/marcio/dados/projects/javascripts/lerna-monorepo/packages/react-labs/build-web-extension/

    cd /home/marcio/dados/projects/javascripts/lerna-monorepo/packages/react-labs/build-web-extension/

    zip -r -FS /home/marcio/Downloads/mozg-web-extension.zip * --exclude *.git*

    cd /home/marcio/Downloads

### Sobre as URLS da Web-Extension

chrome-extension://nfbhmljimlnkjkhdecjagaefdpiiikgm/index.html
`chrome-extension://nfbhmljimlnkjkhdecjagaefdpiiikgm/_generated_background_page.html`
chrome-extension://nfbhmljimlnkjkhdecjagaefdpiiikgm/web-extension/devtools.html

### https://chrome-extension-downloader.com/how-does-it-work.php

https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&x=id%3D~~~~%26installsource%3Dondemand%26uc

Executar em outro browser

### Local de armazenamento das extensões

ls -lah ~/.config/google-chrome/Default/Extensions/

--

:cat2:

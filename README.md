[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"

![valid XHTML][checkmark]

# react-workspaces 👉️

## Contribuição

Caso queira contribuir para melhoria da documentação de um Fork no repositório e envie um pull request ou edite no github

## Requerimentos

- https://www.docker.com/
- https://code.visualstudio.com/
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Executando local

```
git clone ☝️

cd <directory>

code --new-window .
```

## Executando no container

## Executando na nuvem:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mozgbrasil/acid-workspaces) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/mozgbrasil/acid-workspaces) [![Deploy with Vercel](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mozgbrasil/acid-workspaces) [![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run?git_repo=https://github.com/mozgbrasil/acid-workspaces)

### Maintain

Please check the following:

- 100% test coverage

```
jest --coverage --testPathIgnorePatterns test-app
```

- Code is formatted with Prettier

```
yarn prettier --write "**/*.{js,jsx,json,css,scss,html,md,yml}"
```

- No ESLint warnings

```
yarn eslint --fix --ext .js lib/
```

- No security vulnerabilities in any NPM packages

```
yarn audit

yarn audit --groups "dependencies devDependencies"
```

## Actions

```

👇️

echo -e "\e[38;2;255;0;0m remount_workspaces \e[0m"
export RUN_NCU=false
echo $RUN_NCU
/workspaces/acid-workflow/bash-labs/src/app.sh remount_workspaces
(du -hsx ./* | sort -rh | head -10)

echo -e echo -e "\e[38;2;255;0;0m yarn \e[0m"
yarn install
yarn workspaces info
#lerna bootstrap
lerna list --all --long

echo -e echo -e "\e[38;2;255;0;0m start \e[0m"
yarn workspace @mozg/react-workspace run start

👇️


```

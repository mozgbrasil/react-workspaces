[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/master/assets/images/logos/logo_32_32.png "MOZG"

![valid XHTML][checkmark]

# acid-workspaces

- V.280601-225207

## Run on Cloud:

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
/workspaces/acid-workflow-03/bash-labs/src/app.sh remount_workspaces
(du -hsx ./* | sort -rh | head -10)

echo -e echo -e "\e[38;2;255;0;0m yarn \e[0m"
yarn install
yarn workspaces info
#lerna bootstrap
lerna list --all --long

yarn list
npm ls
#yarn list >> yarn_list.txt
#npm view mongodb
#yarn info mongodb

echo -e echo -e "\e[38;2;255;0;0m start \e[0m"

yarn workspace @mozg/react-workspace run start

yarn workspace create-react-app run start

👇️

meld /home/marcio/dados/acid-workflow/acid-workspaces-main /home/marcio/dados/acid-workflow/acid-workspaces

diff --brief --recursive /home/marcio/dados/acid-workflow/acid-workspaces-main /home/marcio/dados/acid-workflow/acid-workspaces

👇️

yarn run build

yarn run start

👇️


```

## Init

```

cd packages && ls

⚙️

https://github.com/facebook/create-react-app

npx create-react-app create-react-app

🎉️

yarn workspace create-react-app run start

yarn workspace @mozg/react-workspace run start

⚙️

# https://nextjs.org/docs/api-reference/create-next-app

npx create-next-app create-next-app

🎉️

yarn workspace create-next-app run dev

⚙️

# https://expressjs.com/pt-br/starter/generator.html

express --view=pug --css=stylus --git create-express-app

🎉️

DEBUG=create-express-app:* yarn workspace create-express-app run server

yarn workspace @mozg/express-labs run server

⚙️

# https://github.com/Stremio/stremio-addon-sdk

🎉️

yarn workspace @mozg/stremio-addon run dev

⚙️

# https://github.com/coderaiser/cloudcmd#using-as-middleware

🎉️

yarn workspace cloudcmd run dev

⚙️

# https://react.nodegui.org/

npx create-react-app --template react-nodegui create-react-nodegui

🎉️

yarn workspace create-react-nodegui run start

⚙️

wget https://github.com/mdl-s/spereact/archive/refs/heads/main.zip -O fuse-react-app.zip

🎉️

yarn workspace fuse-react-app run start

⚙️

# https://reactnative.dev/docs/environment-setup

expo init create-react-native-app-blank
expo init create-react-native-app-blank-ts
expo init create-react-native-app-tabs-ts
expo init create-react-native-app-minimal
expo init create-react-native-app-minimal-ts

🎉️

yarn workspace create-react-native-app-blank start

⚙️

# isomorphic

🎉️

yarn run start:iso-cra


```

## Deploy

```bash
.
├── "mirror repo"
├── https://github.com/mozgbrasil/acid-workspaces
│   ├── https://bitbucket.org/mozgbrasil/acid-workspaces
│   └── https://gitlab.com/mozgbrasil/acid-workspaces
```

- https://github.com/mozgbrasil/acid-workspaces
- https://bitbucket.org/mozgbrasil/acid-workspaces
- https://gitlab.com/mozgbrasil/acid-workspaces

## Vercel

[Vercel](https://github.com/zeit/now/tree/master/examples#what-is-vercel) is a cloud platform for static frontends and serverless functions. It enables developers to host websites and web applications that deploy instantly, scale automatically, and require no supervision.

## Deploy settings

```

# Build settings

Name: acid-create-express-app
Development command: yarn workspace create-express-app run server
Publish directory: packages/create-express-app/build

# Build settings

Name: acid-create-react-app
Build command: yarn workspace create-react-app run build
Publish directory: packages/create-react-app/build

# Build settings

Name: acid-create-next-app
Build command: yarn workspace create-next-app run prestart
Publish directory: packages/create-next-app/out

# Build settings

Name: acid-express-labs
Development command: yarn workspace @mozg/express-labs run server
Publish directory: packages/express-labs/build

# Build settings

Name: acid-react-labs
Build command: yarn workspace @mozg/react-workspace run build
Publish directory: packages/react-labs/build

# Build settings

Name: acid-next-labs
Development command: yarn workspace @mozg/next-labs run prestart
Publish directory: packages/next-labs/out

```

## Deploy via client

```


👇️

# https://vercel.com/cli

vercel --scope mozgbrasil --help

vercel list --scope mozgbrasil

vercel init --scope mozgbrasil --help

vercel init --scope mozgbrasil

vercel whoami --scope mozgbrasil

vercel login --help

vercel login mozgbrasil@gmail.com

vercel env ls --scope mozgbrasil

vercel dev --help

vercel dev

vercel link --scope mozgbrasil --help

vercel link --scope mozgbrasil

  # Create

  Vercel CLI 22.0.1
  ? Set up “/workspaces/acid-workspaces”? [Y/n] y
  ? Which scope should contain your project? Marcio Dos Santos Amorim
  ? Found project “mozgbrasil/acid-workspaces”. Link to it? [Y/n] n
  ? Link to different existing project? [Y/n] n
  ? What’s your project’s name? acid-create-next-app
  ? In which directory is your code located? ./
  ✅  Linked to mozgbrasil/acid-create-next-app (created .vercel)

  # Switch

  Vercel CLI 22.0.1
  ? Set up “/workspaces/acid-workspaces”? [Y/n] y
  ? Which scope should contain your project? Marcio Dos Santos Amorim
  ? Found project “mozgbrasil/acid-workspaces”. Link to it? [Y/n] n
  ? Link to different existing project? [Y/n] y
  ? What’s the name of your existing project? acid-create-next-app
  ✅  Linked to mozgbrasil/acid-create-next-app (created .vercel)


vercel deploy --scope mozgbrasil --help

vercel deploy --scope mozgbrasil

📝  Deployed to production. Run `vercel --prod` to overwrite later

```

## Netlify

Netlify is a web developer platform that multiplies productivity

```

👇️

# https://docs.netlify.com/cli/get-started/#installation

netlify help

netlify status

netlify login

netlify sites:list

netlify init

netlify dev

netlify build

netlify deploy

```

## Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud

```

👇️

# https://devcenter.heroku.com/articles/heroku-cli#verifying-your-installation

heroku --help

heroku --version

heroku local

heroku local release

heroku local web

heroku login

heroku apps --help

heroku apps

heroku ps:scale -a acid-workspaces
heroku ps:scale -a acid-create-react-app
heroku ps:scale -a acid-react-labs

heroku ps -a acid-create-react-app
heroku ps:kill -a acid-create-react-app web.1
# heroku ps:kill -a acid-create-react-app worker.1
heroku ps -a acid-create-react-app

heroku ps -a acid-create-react-app

heroku logs --tail -a acid-create-react-app

heroku apps:destroy --app=acid-create-react-app --confirm=acid-create-react-app

heroku apps:create acid-create-react-app

heroku buildpacks --app=acid-create-react-app

heroku releases --app=acid-create-react-app

👇🏼️👇🏼 How do I clear the build cache?

heroku plugins:install heroku-builds
heroku builds:cache:purge -a acid-create-react-app

👇🏼️👇🏼️ get env

heroku config --app=acid-create-react-app

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-create-react-app

heroku config:set WEB_MEMORY="4096" -a acid-create-react-app

heroku config:set NODE_OPTIONS="--max_old_space_size=4096" -a acid-create-react-app # 👉️ Fix: JavaScript heap out of memory / React

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace create-react-app run build" --app=acid-create-react-app

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace create-react-app run server" --app=acid-create-react-app

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-workspaces

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace create-react-app run build" --app=acid-workspaces

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace create-react-app run server" --app=acid-workspaces

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-react-labs

heroku config:set NODE_ENV="development" -a acid-react-labs

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace @mozg/react-workspace run build" --app=acid-react-labs

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace @mozg/react-workspace run server" --app=acid-react-labs

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-create-next-app

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace create-next-app run prestart" --app=acid-create-next-app

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace create-next-app run server" --app=acid-create-next-app

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-next-labs

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace @mozg/next-labs run prestart" --app=acid-next-labs

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace @mozg/next-labs run server" --app=acid-next-labs

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-create-express-app

heroku config:set WEB_MEMORY="4096" -a acid-create-express-app

heroku config:set PACKAGE_SCRIPTS_BUILD="echo PACKAGE_SCRIPTS_BUILD" --app=acid-create-express-app

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace create-express-app run server" --app=acid-create-express-app

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-express-labs

heroku config:set PACKAGE_SCRIPTS_BUILD="echo PACKAGE_SCRIPTS_BUILD" --app=acid-express-labs

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace @mozg/express-labs run server" --app=acid-express-labs

👇🏼️👇🏼️ set env to Profile

heroku config:set NODE_VERBOSE="true" -a acid-express-labs-ts

heroku config:set PACKAGE_SCRIPTS_BUILD="yarn workspace @mozg/express-labs-ts run build" --app=acid-express-labs-ts

heroku config:set PACKAGE_SCRIPTS_START="yarn workspace @mozg/express-labs-ts run start" --app=acid-express-labs-ts

👇🏼️👇🏼️

heroku status

heroku logs

heroku buildpacks:add https://github.com/mars/create-react-app-buildpack.git --app=acid-workspaces

👇️ [local] deploy to heroku

cd /media/marcio/HDD/dados/acid-workspaces

git remote --verbose
heroku git:remote --app=acid-create-next-app
git remote --verbose

git status
git show-branch
git branch -vv

git push --force --set-upstream --verbose heroku main

heroku releases --app=acid-create-next-app

```

## Google Cloud Plataform

[App Engine](https://cloud.google.com/appengine)

- https://cloud.google.com/appengine/docs/standard/nodejs/quickstart?hl=pt_BR

```

👇️

Implantar com o SDK do Google Cloud

Faça o download do SDK do Cloud

https://cloud.google.com/sdk/

gcloud init

    Your browser has been opened to visit:

        https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=32555940559.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8085%2F&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth&state=QW6CUvg86cYEF95yljABxQPRDjBWAv&access_type=offline&code_challenge=8C_WKUtc8NAADetaFUkbNVeItuJF1dAjI_Nyg0wT-qA&code_challenge_method=S256

👇️

gcloud --help

gcloud auth list

gcloud projects list

gcloud config set project acid-workspaces

gcloud config list project

gcloud app versions list

gcloud app deploy --no-promote

gcloud app deploy

gcloud run services list

gcloud run services describe acid-react-labs --format export

gcloud builds --help


```

## Beamup

beamup

```

👇️

beamup --help

cat /home/codespace/beamup-config.json

beamup deploy

beamup logs

```

## pm2

Advanced process manager for production Node.js applications. Load balancer, logs facility, startup script, micro service management, at a glance.

```

👇️

pm2 --help

clear && pm2-runtime start ecosystem.config.js --env local action=start # foreground

clear && pm2-runtime start ecosystem.config.js --env production action=build --only "create-next-app,create-react-app,react-labs" # foreground

clear && pm2-runtime start ecosystem.config.js --env production action=server --only "create-next-app,create-react-app,react-labs" # foreground

# pm2 start ecosystem.config.js --env local #background

pm2 list

pm2 logs

pm2 stop ecosystem.config.js

```

## lerna

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

```

👇️

lerna --help

lerna info

lerna add @babel/preset-env --scope=@mozg/react-workspace --dev

lerna list --all --long

lerna clean --yes

lerna run dev --parallel --stream

```

## mongodb

### mongodb - local

```
telnet 172.18.0.2 27017 # mongodb

docker network connect mongodb_devcontainer_default <container>
```

### mongodb - DevContainer

```
mongo "mongodb://172.18.0.2:27017/roadcam"

mongo "mongodb://172.18.0.2:27017/local" --username dbUser

mongo "mongodb+srv://localhost:27017/<dbname>" --username dbUser

mongo --version

mongo <<EOF
show databases
EOF

mongo <<EOF
show databases
use local
show collections
db.startup_log.find()
db.startup_log.findOne()
db.startup_log.find().count()
EOF

https://www.striphtml.com/

mongo <<EOF
show databases
use roadcam
show collections
EOF

mongoimport \
--uri 'mongodb://172.18.0.2:27017/roadcam' \
--collection='cameras' \
--file='cameras-mongodb.json'

mongo <<EOF
show databases
use roadcam
show databases
db.cameras.insertOne( { x: "Feature"  } )
show collections
EOF

mongo <<EOF
show databases
use myNewDB
db.myNewCollection1.insertOne( { x: 1 } )
db.myNewCollection2.insertOne( { x: 1 } )
db.myNewCollection3.createIndex( { y: 1 } )
show collections
EOF

mongo <<EOF
show databases
use roadcam
db.dropDatabase()
show databases
EOF
```

## Primeiros projetos com React feito em 2018

👇️

- https://reactjs-portfolio.herokuapp.com/
- https://mozg.com.br/react-labs/

👇️

## Continuous Integration (CI)

- https://github.com/mozgbrasil/acid-workspaces
- https://gitlab.com/mozgbrasil/acid-workspaces
- https://bitbucket.org/mozgbrasil/acid-workspaces/src/master/

## Continuous Delivery (CD), PaaS

👇️

https://mozg.com.br/

👇️

https://vercel.com/dashboard

- https://acid-workspaces.vercel.app/
- https://acid-workspaces.vercel.app/api/js/express/
- https://acid-create-react-app.vercel.app/
- https://acid-create-react-app.vercel.app/api/js/express/
- https://acid-create-react-app.vercel.app/api/go/date/
- https://acid-create-react-app.vercel.app/api/js/hello/
- https://acid-create-react-app.vercel.app/api/rb/hello/
- https://acid-create-next-app.vercel.app/
- https://acid-express-labs.vercel.app/
- https://acid-react-labs.vercel.app/
- https://acid-next-labs.vercel.app/

👇️

https://app.netlify.com/

- https://acid-workspaces.netlify.app/
- https://acid-create-react-app.netlify.app/
- https://acid-create-react-app.netlify.app/.netlify/functions/express
- https://acid-create-react-app.netlify.app/.netlify/functions/hello
- https://acid-create-react-app.netlify.app/.netlify/functions/lambd
- https://acid-create-next-app.netlify.app/
- https://acid-react-labs.netlify.app/
- https://acid-next-labs.netlify.app/

👇️

https://dashboard.heroku.com/apps

- https://acid-workspaces.herokuapp.com/
- https://acid-create-react-app.herokuapp.com/
- https://acid-create-next-app.herokuapp.com/
- https://acid-create-express-app.herokuapp.com/
- https://acid-react-labs.herokuapp.com/
- https://acid-express-labs.herokuapp.com/
- https://acid-express-labs-ts.herokuapp.com/
- https://acid-next-labs.herokuapp.com/

👇️

https://console.cloud.google.com/

- https://console.cloud.google.com/billing?folder=&organizationId=
- https://console.cloud.google.com/cloud-resource-manager
- https://console.cloud.google.com/run
- https://acid-react-labs-xrmoz3djva-uc.a.run.app/
- https://console.cloud.google.com/functions/list
- https://us-central1-acid-workspaces.cloudfunctions.net/function-public
- https://us-central1-acid-workspaces.cloudfunctions.net/function-private
- https://console.cloud.google.com/cloud-build/builds
- https://console.cloud.google.com/logs

👇️

https://app.infinityfree.net/

- pwd: infinityfree-pww7Y

## Links

- https://blog.heroku.com/building-a-monorepo-with-yarn-2
- https://github.com/vercel/vercel/tree/main/examples/create-react-app
- https://betterprogramming.pub/how-to-remove-committed-files-from-git-version-control-b6533b8f9044
- https://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/
- https://github.com/heroku-examples
- https://github.com/facebook/react-native#-building-your-first-react-native-app
- https://expo.io/tools
- https://themeforest.net/tags/react
- https://madewithreactjs.com/?page=2
- https://www.npmtrends.com/auditjs-vs-depcheck-vs-npm-check-vs-npm-check-updates-vs-npmvet-vs-renovate-vs-retire-vs-snyk-vs-updtr-vs-@dependabot/yarn-lib
- https://medium.com/ifood-tech/como-funciona-um-monorepo-em-javascript-46abaa8f8b13
- https://codepen.io/search/pens?q=cards&cursor=ZD0xJm89MCZwPTIx
- https://getbootstrap.com/docs/5.0/layout/z-index/
- https://mern-crud.herokuapp.com/
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
- https://github.com/microsoft/TypeScript-Node-Starter
- https://github.com/jonathan-santos-dev/talent-data-api
- https://cloud.google.com/nodejs?hl=pt-br
- https://codelabs.developers.google.com/codelabs/cloud-run-deploy
- https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/run/helloworld
- https://github.com/GoogleCloudPlatform/community/blob/master/tutorials/deploy-react-nginx-cloud-run/Dockerfile
- https://labs.play-with-docker.com/
- https://training.play-with-docker.com/
- https://stackoverflow.com/questions/9285880/node-js-express-js-how-to-override-intercept-res-render-function/24051339
- https://github.com/krofax/Dark-Mode-Using-Styled-Component-In-React-Apps

ARG PACKAGE_SCRIPTS_BUILD
ARG PACKAGE_SCRIPTS_START
ARG PACKAGE_PUBLISH_DIRECTORY
ARG _DEPLOY_REGION

# test
FROM alpine as copy-build

RUN env | sort
RUN pwd
RUN ls

# build environment

# FROM node:14-alpine as react-build
# RUN apk update && apk add bash

# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim as react-build

RUN env | sort
RUN pwd
RUN ls

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
## RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Test
RUN ./app.sh

# @TODO: Preciso resgatar os env para dentro do Dockerfile a fim de não usar as variaveis a seguir para cada serviço
ENV PACKAGE_SCRIPTS_BUILD ${PACKAGE_SCRIPTS_BUILD:-"yarn workspace @mozg/react-workspace run build"}
ENV PACKAGE_SCRIPTS_START ${PACKAGE_SCRIPTS_START:-""}
ENV PACKAGE_PUBLISH_DIRECTORY ${PACKAGE_PUBLISH_DIRECTORY:-"packages/react-labs"} 

RUN env | sort
RUN pwd
RUN ls
RUN yarn --version
RUN yarn
RUN yarn build
# Run the web service on container startup.
# EXPOSE 8080
# RUN yarn start
# CMD [ "yarn", "start" ] 

# server environment
FROM nginx:alpine

RUN env | sort
RUN pwd
RUN ls

COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=react-build /usr/src/app/packages/react-labs/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
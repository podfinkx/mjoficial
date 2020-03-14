FROM node:12-alpine

# Create the app directory
WORKDIR /app

# Install vips for sharp image processing on Alpine Linux - https://sharp.pixelplumbing.com/en/stable/install/
RUN apk add --upgrade --no-cache vips-dev build-base \
  --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Install dependencies
COPY package.json ./
RUN npm install --silent

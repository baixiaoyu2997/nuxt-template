FROM node:14.15.4-alpine

RUN mkdir -p /root/app-embed-page
WORKDIR /root/app-embed-page

COPY package.json /root/app-embed-page

RUN npm install --production

COPY .nuxt /root/app-embed-page/.nuxt
COPY assets /root/app-embed-page/assets
COPY components /root/app-embed-page/components
COPY composables /root/app-embed-page/composables
COPY configs /root/app-embed-page/configs
COPY layouts /root/app-embed-page/layouts
COPY middleware /root/app-embed-page/middleware
COPY pages /root/app-embed-page/pages
COPY plugins /root/app-embed-page/plugins
COPY server /root/app-embed-page/server
COPY serverMiddleware /root/app-embed-page/serverMiddleware
COPY static /root/app-embed-page/static
COPY store /root/app-embed-page/store
COPY utils /root/app-embed-page/utils
COPY nuxt.config.js /root/app-embed-page

CMD npm start

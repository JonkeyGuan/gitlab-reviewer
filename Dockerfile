FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --chown=node:node . .

ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN yarn build

EXPOSE 3000

RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "3000"]

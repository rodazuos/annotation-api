FROM node:21-slim

ENV PORT=3072

WORKDIR /app

COPY . /app

RUN apt-get update && apt-get install -y yarn

RUN yarn

CMD [ "yarn", "start" ]

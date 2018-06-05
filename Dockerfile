FROM node:8.1.2
MAINTAINER "Stefan Walther"

ARG PORT=9696

ENV SPEEDTEST_PORT=$PORT
ENV HOME /home

RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json ./

RUN npm install

COPY . .

EXPOSE $SPEEDTEST_PORT


CMD ["npm", "run", "start"]

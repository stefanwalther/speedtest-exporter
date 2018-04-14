FROM node:9-alpine
MAINTAINER "Stefan Walther"

ARG PORT=9696

ENV PORT=$PORT
ENV HOME /home

RUN mkdir -p $HOME
WORKDIR $HOME

COPY . /home

RUN npm install

EXPOSE $PORT

CMD ["npm", "run", "start"]

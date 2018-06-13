FROM node:9-alpine@sha256:de0fc4272136f43c366f68681743b5717e2e7db7646b20c714005274cd638204
MAINTAINER "Stefan Walther"

ARG PORT=9696

ENV PORT=$PORT
ENV HOME /home

RUN mkdir -p $HOME
WORKDIR $HOME

COPY . /home

RUN npm install --quiet

EXPOSE $PORT

CMD ["npm", "run", "start"]

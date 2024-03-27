FROM node:20-alpine@sha256:73753e08a8755a0838696135be60a5f1e33c6cf92a15bc4e71465f3d0fda6422
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

FROM node:9-alpine@sha256:c812a92b98800c243bd4bafbc5a528b4fdf4bcd57a1d8de4192deded085ba6da
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

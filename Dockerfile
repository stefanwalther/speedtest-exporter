FROM node:9-alpine@sha256:5aa0756284c7f0222c2c16988fb58d6446427ac7ae8891aa50a2de721ef4191c
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

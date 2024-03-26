FROM node:20-alpine@sha256:121edf6661770d20483818426b32042da33323b6fd30fc1ad4cd6890a817e240
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

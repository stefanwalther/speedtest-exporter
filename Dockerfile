FROM node:21-alpine@sha256:3dab5cc219983a5f1904d285081cceffc9d181e64bed2a4a18855d2d62c64ccb
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

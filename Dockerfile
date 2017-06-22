FROM node:7.9.0

ARG PORT=9696
ENV PORT=$PORT
ENV HOME /home


RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "start"]

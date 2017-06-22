FROM node:8.1.2

ENV HOME /home
RUN mkdir -p $HOME
WORKDIR $HOME

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9696

CMD ["npm", "run", "start"]

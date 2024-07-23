FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm rebuild bcrypt

EXPOSE 3000

CMD ["node", "server.js"]

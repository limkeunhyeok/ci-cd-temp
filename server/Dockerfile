FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./

RUN npm install

ENV NODE_ENV=production

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "node","./dist/server.js" ]
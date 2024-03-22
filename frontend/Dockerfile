FROM node:15.13-alpine

WORKDIR /react

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

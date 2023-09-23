FROM node:20-alpine

# Create app directory
COPY /src /app/src
COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
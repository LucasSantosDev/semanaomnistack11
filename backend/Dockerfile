FROM node:10-alpine

WORKDIR /usr/app
COPY package*.json yarn.lock ./

RUN npm install

COPY . . /usr/app/

# RUN apt-get update

EXPOSE 3333

CMD ["npm", "start"]

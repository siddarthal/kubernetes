FROM node:21.1.0-alpine
WORKDIR /usr/src/app
RUN mkdir data && cd data && touch pingpong_count.txt
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD node index.js
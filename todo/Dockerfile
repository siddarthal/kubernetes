FROM node:21.1.0-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]

# RUN npm run build

# CMD ["npm", "run", "preview"]
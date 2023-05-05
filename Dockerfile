FROM node:18

WORKDIR /app-node

ENV PORT $PORT_BUILD
EXPOSE $PORT

COPY . .

RUN npm install

CMD ["npm", "run", "start:prod"]
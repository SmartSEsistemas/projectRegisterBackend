FROM node:18

WORKDIR /app-node

ENV PORT $PORT_BUILD
EXPOSE $PORT

COPY . .

RUN npm install

<<<<<<< HEAD
CMD ["npm", "run", "start:prod"]
=======
CMD ["npm", "run", "start:prod"]

>>>>>>> b9d0cbe40700cd7f77e5031c17922de2267c5bff

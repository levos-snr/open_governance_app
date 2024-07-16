// backend/server.js
const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const app = express();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

app.use(express.json());



app.listen(4000, () => {
  console.log('Express server is running on port 4000');
});

const express = require('express');
const userRouter = require('./users/userRouter.js')
const postRouter = require('./posts/postRouter.js')
const server = express();

//global middleware
server.use(express.json());
server.use(logger);

server.use('/api/users',userRouter)

server.use('/api/user/posts/',postRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} request to '${req.url}' made at ${new Date().toISOString()}`)
  next();
};

module.exports = server;

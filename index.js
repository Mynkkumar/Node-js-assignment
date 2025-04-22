//Creating a server with node js
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')

// const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = data.products;

const server = express();

server.use(morgan('default'));
server.use(express.json());
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router)

server.listen(8080, () => {
    console.log("server started");
});

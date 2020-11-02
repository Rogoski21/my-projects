const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

//primeira rota
routes.get("/product", ProductController.index);

module.exports = routes;

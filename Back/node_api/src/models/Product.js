const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  //array com varios objetos dentro
  title: {
    type: String,
    required: true,
  },
  description: {
    //descri;'ao do produto
    type: String,
    required: true,
  },
  url: {
    //url do produto
    type: String,
    required: true,
  },
  createdAt: {
    //guarda a data de criacao de cada produto
    type: Date,
    default: Date.now,
  },
});

//Estamos registrando no mongoose nossa productSchema

mongoose.model("product", ProductSchema);

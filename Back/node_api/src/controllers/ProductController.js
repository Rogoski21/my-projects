//vai controlar as operações de tederminado modo, listagem, remocao etc

const mongoose = require("mongoose");

const Product = mongoose.model("Product");

//permite chamarmos funcões asincronas em circunstancias sincronas
module.exports = {
  async indexe(req, res) {
    const products = await Product.find();
    return res.json(products); //vamos retornar em uma estrutura json
  },
};

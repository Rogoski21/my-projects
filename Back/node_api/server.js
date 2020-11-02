const express = require("express"); //importamos o express
const mongoose = require("mongoose"); //importando o mongoose
const requireDir = require("require-dir"); //biblioteca para ajudar na require em todos os arquivos npm install require-dir

//iniciando o app
const app = express(); //clamada da função

//iniciando o DB

mongoose.connect("mongodb://localhost:27017/node_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// logo abaixo com a conecao do banco de dados vamo0s fazer a chamada obrigatoria do models
requireDir("./src/models");

//recebe todo tipo de requisicao
//rotas
app.use("/api", require("./src/routes"));

app.listen(3001); //vai escutar a porta 3001 do navegador

/*para deixar "automatico" adicionamos a extensão nodemon
 comando npm install -D nodemon e na pasta packge.json criamos o script
  "dev":"nodemon server.js" fazendo com que nossa aplicação fique mais fácil de tra
  balhar
  */

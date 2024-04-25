const  express = require("express"); // Importando  o express
const app = express(); // Iniciando o express

app.listen(8181,function(erro){
  if(erro){
       console.log("Ocorreu um erro");
  }else{
    console.log("Servidor iniciando com sucesso!");
  }
})





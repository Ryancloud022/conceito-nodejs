const  express = require("express"); // Importando  o express
const app = express(); // Iniciando o express
var listaFibonacci = require("./fibonacci");

app.listen(8184,function(erro){
    if(erro){
         console.log("Ocorreu um erro!");
    }else{
         console.log("Servidor iniciando com sucesso!: "+ 
         listaFibonacci.listarAte100());
    }
  })
  
  
const  express = require("express"); // Importando  o express
const app = express(); // Iniciando o express



app.get("/",function(req,res){
     res.send("Olá tudo bem?");
});

app.get("/blog",function(req, res){
     res.send("Olá Bem Vindo ao blog");
})

app.get("/canal/youtuber", function(req,res){
     res.send("<h1>Bem Vindo ao Meu Canal!</h1>");
})


app.listen(8181,function(erro){
  if(erro){
       console.log("Ocorreu um erro!");
  }else{
       console.log("Servidor iniciando com sucesso!");
  }
})





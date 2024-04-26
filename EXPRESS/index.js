const  express = require("express"); // Importando  o express
const app = express(); // Iniciando o express



app.get("/",function(req,res){
     res.send("</h1>Olá tudo bem?</h1>");
});

app.get("/blog",function(req, res){
     res.send("Olá Bem Vindo ao blog");
})

app.get("/canal/youtuber", function(req,res){
     res.send("<h3>Bem Vindo ao Meu Canal!</h3>");
    });

app.get("/ola/:nome/:empresa", function(req, res){
       // REQ => DADOS ENVIADOS PELO USUÁRIO
       // RES => RESPOSTA que vai ser enviada para o usuário
      var nome = req.params.nome; 
      var empresa = req.params.empresa;
     res.send("<h1>Oi " + nome +  " do " + empresa +"</h1>");
});


app.listen(8181,function(erro){
  if(erro){
       console.log("Ocorreu um erro!");
  }else{
       console.log("Servidor iniciando com sucesso!");
  }
})





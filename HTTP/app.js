var http = require("http");
const os = require('os');
const nomeDoComputador = os.hostname();
const sOperacional = os.platform();


http.createServer(function(requisicao,resposta){
 resposta.end("<h1>Bem vindo ao meu site!</h1><br><h14>udemy.com, acessado pelo computador :  "+nomeDoComputador+" no sistema operacional <strong>"+ sOperacional +"</strong></h4>");
}).listen(8181);

console.log("Meu sevidor esta rodando!")

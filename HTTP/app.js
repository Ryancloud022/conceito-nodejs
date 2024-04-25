var http = require("http");

http.createServer(function(requisicao,resposta){
 resposta.end("<h1>Bem vindo ao meu site!</h1><br><h14>udemy.com</h4>");
}).listen(8181);

console.log("Meu sevidor esta rodando!")















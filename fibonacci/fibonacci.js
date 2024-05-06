function listarAte100() {
  var textoSugerido, textoCalculado;

  textoSugerido = "1 ,1 , 2 ,3 , 5, 8, ... ate item 100";

  textoCalculado = "";

  var seqA, seqB, resultado;
  seqA = 1;
  seqB = 1;

  resultado = seqA + seqB;
  textoCalculado = textoCalculado + "," +
    seqA + " , " +
    seqB ;

  for (let i = 0; i < 8; i++) {
 
      resultado = seqA + seqB;
      textoCalculado = textoCalculado + ", " + resultado;
      seqA = seqB;
      seqB = resultado;
  
      console.log("valor do i:" + i);
      console.log("valor do seqA:" + seqA);
      console.log("valor do seqB:" + seqB);
      
      console.log("valor resultado:" + resultado);
      console.log("-----");
      console.log(i);
  
  

  }
  console.log(textoCalculado);
  return "concluido";

}

function nextNumber(num) {
  var auxiliar;
  if (!num) { // se nao tiver parametro num, considerar o primeiro numero da seq
    auxiliar = 1;
  }
  else { // se tiver numero, verificar o proximo da seq

    auxiliar = num;
  }
  return auxiliar;
}

module.exports = {
  listarAte100,
};
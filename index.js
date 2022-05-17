console.log("CALCULADORA ÁLCOOL x GASOLINA")
console.log()

resposta = ""

do{

  //coletando valor de combustível
  gasolina = prompt("Preço do Litro da Gasolina - R$");
  alcool  = prompt("Preço do Litro do Álcool - R$");

  //mudando números com vírgulas para pontos
  gasolinatratado = gasolina.replace(",", ".");
  alcooltratado = alcool.replace(",", ".");

  //realizando o cálculo
  calculo = parseFloat(alcooltratado / gasolinatratado);

  //testando resultado para dar a resposta correspondente
  if (calculo > 0.7){
      alert("Vale mais a pena usar: Gasolina!")
  } 
  else if (calculo < 0.7){
      alert("Vale mais a pena usar: Álcool!")
  }
  else if (calculo == 0.7){
      alert("Você pode escolher qualquer um dos dois combustíveis!")
  }
  else {
      alert("Digite valores válidos!")
  }

  resposta = prompt("Deseja calcular novamente? (1 para SIM / 2 para NÃO)")
  console.log()
  
}while(resposta != "2")

console.log("Até logo!")
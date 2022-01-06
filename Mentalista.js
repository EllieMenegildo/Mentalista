var numeroSecreto = parseInt(Math.floor((Math.random()* 10)))
var tentativas = 3
var pontos = 0



while(tentativas > 0){
  var chute = parseInt(prompt("Tente acertar o número sorteado \n digite um número entre 0 e 10"))
  var DePrimeira = Math.floor(Math.random() * 2)
  
  //numero certo
  if(numeroSecreto == chute){
    alert("acertou")
    pontos = pontos + 5
    document.write("<h3>" + pontos + "</h3>")
    break
  }
  //N menor
  else if(chute > numeroSecreto){
    alert("O número secreto é menor")
    tentativas = tentativas - 1
    pontos = pontos + 2
  }
  //N maior
  else if(chute< numeroSecreto){
    alert("O número secreto é maior")
    tentativas = tentativas - 1
    pontos = pontos + 2
  }
}

//De primeira
if (chute == numeroSecreto && DePrimeira && tentativas == 3){
  alert("Acertou de primeira! Parabéns, ganhou mais 10 pontos!")
  pontos = pontos + 10
  document.write("<h3>" + pontos + "</h3>")
  
}

//Sem + tentativas
if (chute != numeroSecreto){
  alert("suas tentativas acabaram! O número secreto era " + numeroSecreto)
  
  document.write("<h3>" + pontos + "</h3>")
  
}
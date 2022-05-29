// exercícios
// 1 ) Crie uma função para verificar se um valor é truthy
/*
function maiorQueCinco(numero) {
  if (numero > 5) {
    numero = true;
  } else {
    numero = false;
  }
}

console.log(maiorQueCinco(7));*/
/*
var souMaiorDeIdade;

function checarMaioridade(souMaiorDeIdade) {
  if (souMaiorDeIdade >= 18) {
    checarMaioridade = true;
  } else {
    checarMaioridade = false;
  }
}

console.log(checarMaioridade(24));
ERREI PORQUE COMPLIQUEI MUITO. SEGUE RESPOSTA
*/
function verdadeiroOuFalso(dado) {
  return !!dado;
}

// ========================================================

// Crie uma função matemática que retorne o perímetro de um quadrado.

function perimetroQuadrado(lado) {
  let perimetro = lado * 4;
  console.log(`O perímetro do quadrado é ${perimetro}`);
}

perimetroQuadrado(10);
// certo
// ex 3 ==================================================
let nome, sobrenome;
// crie uma função que retorne o seu nome completo com 2 parâmetros: nome e sobrenome.

function nomeCompleto(nome, sobrenome) {
  console.log(`Olá, ${nome} ${sobrenome}!`);
}

nomeCompleto("Larissa", "Rocha");
// certo
// ex 4 ===================================================
// crie uma função que verifica se um número é par

function parOuImpar(numeroa) {
  if (numeroa % 2 === 0) {
    return "O número é par";
  } else {
    return "O número é ímpar";
  }
}

console.log(parOuImpar(6485));
//certo

//ex 5=====================================================
// crie uma função que retorna o tipo de dado do argumento passado nela (type of)

function tipoDeDado(tipo) {
  return typeof tipo;
}
console.log(tipoDeDado(4));

// certo

//addEventListener - função nativa do javascript. o primeiro parâmetro é o evento que ocorre e o segundo é o callback
// use essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' acontecer
addEventListener("scroll", function () {
  console.log("Larissa Bastos");
});

// Corrija o erro abaixo

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
precisoVisitar(32);

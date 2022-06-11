var numero2 = 20;
numero2 += 10;

console.log(numero2);

var podeBeber;
podeBeber = numero2 > 18 ? "pode beber" : "não pode beber";
console.log(podeBeber);

//exercícios ==================================

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll.

var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito, caso o cliente possua carro e casa, e false caso contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;

console.log(darCredito);

// exercícios ESCOPO

// por qual motivo o código abaixo retorna com erros?
/* 
{
var cor = 'preto';
const marca = 'Fiat';
let portas = 4;
console.log(var, marca, portas)
}
*/
var cor = "preto";
const marca = "Fiat";
let portas = 4;

// dá erro porque var é a variável, não o nome. deve-se chamar pelo nome. Além disso, elas estavam num escopo de bloco.
console.log(cor, marca, portas);

// como corrigir o erro abaixo?
/*
function somarDois(x) {
    const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    return x + dois; 
} 

somarDois(4);
dividirDois(6);
*/

const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));
// dava erro porque cont estava dentro do escopo da função somarDois, então não era acessável na dividirDois.

// O que fazer para o total retornar 500?
/*
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
*/

// O que fazer para o total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// só mudar let para const na variável de cima, já que o loop não vai interferir.

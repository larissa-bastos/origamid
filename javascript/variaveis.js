/* 
AULA TIPOS PRIMITIVOS ORIGAMID
let teste1 = 'teste';
let teste2 = '32';
let myAge = 24;
let nome = 'Larissa',
    sobrenome = 'Rocha';
let nomeCompleto = nome + ' ' + sobrenome;
let teste3 = "It's time";
console.log(typeof nomeCompleto);
*/

var idade = 23; 
console.log(idade);
// soma + (em strings serve para concatenar)
// subtração -
// * multiplicação 
// divisao /
// modulo (resto) % 
// expoente **
// igualdade ===

// **** em subtração e multiplicação e divisao em strings ele consegue perceber e fazer o cálculo se forem só numeros. Se tiver caracteres ele vai dar NaN (not a number);

// assim como na matemática, a programação começa por * e /, a menos que esteja em parênteses. 


// Operadores aritméticos UNÁRIOS - que não precisam de 2 números: 
// incremento : incrementa esse valor em 1. variavel++. ++ antes soma direto no console.log, ++ depois primeiro vai retornar o valor original 
// decremento: --. mesma regra do incremento. 

// agora usar + - só em uma variavel (antes dela, só um, ex:+variavel) transforma isso em numero. Por ex, se for uma string so de numero e tu faz isso, vira numero. é util pra somar e nao concatenar. O - transforma em negativo e em numero. 


//exercicios


console.log('EXERCICIOS');

var total = 10 + 5 * 2 /2 + 20;
console.log(total);
var texto = '2 cabras';
var numero = 4;
console.log(texto * numero);
var texto2 = '1 maçã'
var numero2 = 36;
console.log(texto2 / numero2);

// some a string 200 com o numero 50 e retorne 250.
console.log(+'200' + 50);
var cinco = 5; 
cinco++;
console.log(cinco);

/* como dividir o peso por 2?
dados:
var numero: '80'
var unidade = 'kg'
var peso = numero + unidade (80kg)
var pesoPorDois = peso / 2 (daria nan)
*/

var numero = +'80';
var unidade = 'kg';
var pesoPorDois = (+numero / 2) + unidade;
console.log(pesoPorDois)

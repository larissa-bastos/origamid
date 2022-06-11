var quandoSeFormou = 2018;

quandoSeFormou = 2020;

if(quandoSeFormou > 2018) {
    console.log('Se formou depois de 2018');
} else {
    console.log('Se formou antes de 2018');
}

// --------------------
/*
var qualSeuSigno = 'peixes';

if(qualSeuSigno === 'leão' || 'sagitário' || 'áries') {
    console.log('Signo de fogo');
} else {
    console.log('Signo de água');
}

eu acho que isso ta vendo só se elas são strings com coisa dentro, então dá true. Preciso de algo que veja se são iguais. Acho que só vai funcionar quando eu aprender funções. 


var qualSeuSigno = 'peixes';

switch (qualSeuSigno) {
    case 'leão', 'sagitário':
        console.log('Signo de fogo');
        break;
    case 'aquário', 'peixes', 'câncer':
        console.log('Signo de água');
}
*/

var nome = 5;
if(nome /*se nome existe*/) { 
    console.log(nome);
} else {
    console.log('nome não existe')
}

// o que dá falso? se a variavel for 0 ou o cálculo dentro dela dá 0; se for algo que resulte num NaN; se o if for falso; se for uma variável nula ou não definida até aquele momento; e se for uma string vazia (independentemente do tipo da aspa) . Números negativos são truthy! objetos vazios são truthy!



console.log('NOVO EXEMPLO')
/*
var teste4 = 5; 
if(typeof teste4 = string) {
    console.log(`${teste4}é uma string!`)
} else {
    console.log(`${teste4} não é uma string!`)
}

fiz esse teste e parece que não posso definir se algo é um tipo específico - não por enquanto pelo menos;
tentei fazer uma variável com o typeof teste4 e ainda assim não foi. 
*/ 


// operador de negação: !na frente de qualquer valor que retorne verdadeiro vira falso e vice-versa. colocar !! (duas exclamações) na frente serve para conferir se uma expressão da true ou false. qualquer coisa, não precisa declarar uma variável. 

//operadores de comparação: > ; < ; <= ; >= ; 

// IGUAIS? o == faz uma comparação não tão estrita (o tipo de dado não precisa ser o memso) e o === é uma comparação estrita. O recomendado é usar === na maioria das vezes; funciona para strings e é case sensitive. != e !== são pra ver se são diferentes, mas !== é mais estrito e mais recomendado também.

// && = e. se um dos valores for falso já dá falso, se ambos forem verdadeiros da o ultimo valor verificado. Ex: 'cao' && 'gato' sai gato, que é a ultima string verdadeira (com coisa dentro)

// || ou. retorna o primeiro valor verdadeiro que encontrar. 
// pode usar mais de um operador e misturar eles!!!!

/*  ========== SWITCH  =============

Serve para você verificar se uma variável é igual a valores diferentes. Tipo se a variável for azul faz isso, se for vermelho faz isso , se for amarelo faz isso. Apenas 1 valor contra diversas opções com mts atitudes diferentes. 

Como se coloca::
ex = corFavorita. 

var corFavorita = 'Azul';


switch (corFavorita) {
    case 'Azul';
        console.log('Cor fria');
        break // pare aqui se essa condição for verdadeira;
    case 'Amarelo';
        console.log('Cor quente');
        break;
    case 'Vermelho';
        console.log('Cor quente muito usada em pele');
    default: // caso nada seja 
    verdadeiro
        console.log('Não entendi sua cor.')
}


*/

/* ======== EXERCÍCIOS ============*/

console.log('exercícios');

//verifique se a sua idade é maior que a de algum parente. Dependendo do resultado coloque no console ' é maior ' ou ' é menor '.

let idadeParente;
let minhaIdade; 
idadeParente = 5;
minhaIdade = 24;

if(minhaIdade > idadeParente) {
    console.log('É maior.')
} else if(minhaIdade === idadePrimo) {
    console.log('É igual.')
} else {
    console.log('É menor')
}
// funcionou mas esqueci de fazer um pra igualdade. Preguiça;


// qual valor é retornado na seguinte expressão? vou tentar adivinhar antes. 

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// deu 3, eu tava certa. 

// verifique se as seguintes variáveis são truthy ou falsy. 
var nome = 'Andre'; //truthy 
var idade = 28; // truthy
var possuiDoutorado = false; //n sei, acho f
var empregoFuturo; // falsy?
var dinheiroNaConta = 0 // falsy?

!!nome;
!!idade;
!!possuiDoutorado;
!!empregoFuturo;
!!dinheiroNaConta;
// coloquei no console para verificar = acertei todas. 


// compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
//var china = 1340;

var brasil = 207;
var china = 1340;

if (brasil >= china) {
    console.log('O brasil tem mais habitantes do que a china.');
} else {
    console.log('A china tem mais habitantes que o brasil.');
}

// acertei :D

/* O que irá aparecer no console?
if(('Gato' === 'gato')) && (5 > 2)) { 
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
acho que falso.
*/

/* o que irá aparecer no console? parte 2
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
acho que falso mas to com dúvida.

Opa! Sai cão. Eu cheguei no certo, mas considera truth porque tem uma verdadeira. E aí como tem a ultima expressão ali no console.log, vai pegar a última. 
*/
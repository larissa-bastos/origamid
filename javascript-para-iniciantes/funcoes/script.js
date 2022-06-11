// se você ver um dado () é uma função. 
// ex testeJavascript().
// você coloca um dado nos parênteses e ele te retorna algo. 
/*como montar a função:
function testeJavascript(parâmetros/argumentos. pode ter ou n) {
    return = variavel * 3
    varios códigos
}

se você coloca uma variável como parâmetro ela pode ser usada la dentro ...

ao chamar uma função tem que chamar executando, diferente da variavel. ex variaveis: nome. função: nome()
*/

// parâmetros x argumentos : 
// parâmetros = ao criar a função. pode ser mais de um (a, b) ou nenhum
// argumentos = ao executar a função

function diferencaToulouseLuppy() {
    let toulouse = 12;
    let luppy = 7;
    let diferenca = toulouse - luppy
    console.log (diferenca);
}

console.log(diferencaToulouseLuppy());

// ex do professor
function imc(peso, altura, sexo) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(62,1.57));

// parênteses executam a função. mesmo tendo um parâmetro, não necessariamente tu precisa passar um argumento para ela rodar.
function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    } else if (cor === 'verde') {
        return 'Eu gosto de mato';
    } else {
        return 'Eu não gosto de nada';
    }
}

console.log(corFavorita());

/* argumentos podem sr funções =>
chamadas de callback, são funções que acontecem após algum evento 

exemplo de função do browser == addEventListener - adicionar algo que fica esperando um evento p funcionar. 

appEventListener('click' (tipo de evento que ocorreu), function() (função que vai ser executada caso o evento aconteça))


funções sem nome () são chamadas funções anônimas. Executa o código mesmo assim
*/

//addEventListener('click', function() {console.log('oi')});
// se você clicar no html, vai aparecer oi no console. 

// addEventListener('click', function() {alert('olá')});

//addEventListener('click', function() {alert('você é uma grande gostosa')});

//addEventListener('click', function() {alert('raindeers are better than people')});

// crie uma lista de comidas favoritas ; diga quantas tem na lista; e exiba a segunda posição dela.

let comidasFavoritas = ['pizza', 'nintendo'];
comidasFavoritas.length;
console.log(comidasFavoritas[2]);


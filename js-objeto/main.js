var pessoa = {
  nome: "larissa",
  idade: 24,
};

console.log(pessoa.idade);
console.log(typeof pessoa);
// chaves, valores separados com vírgula

// quando uma função for uma propriedade de um objeto, ela se chama método.
// um objeto pode ter vários métodos. nos métodos, escreve-se assim:
// nomedafunção: function(parametro ou nada).
//   pode escrever normal dentro da função.
// OU
// nomedafuncao(parametro ou nada) {}
// como acessar propriedades de um objeto, falando sobre ele dentro dele mesmo: this. this faz referência ao objeto em si. Então console.log(this) retorna todo o objeto. this.idade retorna a idade do objeto. Isso é pra não precisar reescrever sempre o nome do objeto.

// objetos servem para organizar nosso código em partes reutilizáveis, que fazem sentido maior, ao invés de fazer 25 variáveis.
// math é um objeto nativo. veja propriedades:

Math.PI; //me dá pi
Math.random; //aleatoriza
//se você coloca só math vovê conseuge ver no console todo o objeto.

// dot notation get = > sempre acesse propriedades com um ponto. Você pode atribuir propriedades a uma variável.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";

menu.color = "blue";

menu.esconder = function () {
  console.log("escondi");
};

var hidden = menu.esconder();
var bg = menu.backgroundColor;

//podemos adicionar novas propriedades e métodos a objetos simplesmente adicionando um novo .algo e definindo o valor dele.

// dot notation set = substitua o valor da propriedade usando . e = depois do nome, como fizemos em cima. ex:

var lista = {
  nome: "lari",
  idade: 24,
};

lista.nome = "clara";
console.log(lista.nome);
// muda o nome para clara , no objeto mostra clara tb.

// de novo = this faz referência ao próprio objeto para não escrever 2x.

// protótipo e herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar ele. Então: um objeto cria outro objeto.
// existe um objeto chamado objeto (que é uma função). todo objeto que você cria é baseado nele. e ele tem coisas próprias. quando você coloca umobject. algo , aparece as propriedades que você criou + as que foram herdadas.
// ex: hasOwnProperty serve para ver se essa propriedade está no elemento. Ex: nosso object menu tem a propriedade  color?
menu.hasOwnProperty("color"); // no console vai aparecer ela e vai dar true, porque tem.
// mas se você colocar menu.hasOwnProperty('hasOwnProperty') (ou seja, hasOwnProperty é uma proopriedade de menu?) vai dar false, porque o hasOwnProperty é uma propriedade herdada.
// muitas coisas no javascript possuem propriedades e métodos de herança. Length, por exemplo, é uma herança.

// ================= EXERCÍCIOS

// 1 - crie um objeto com seus dados pessoais: pelo menos duas propriedades: nome e sobrenome

var lari = {
  nome: "Larissa",
  sobrenome: "Bastos",
  profissao: "dev",
  tempoDeEstudo: "2 meses",
  olhos: "castanhos",
  altura: 1.57,
  tatuagens: 1,
};

// crie um método no objeto anterior que mostre seu nome completo - feito

dados.nomeCompleto = function () {
  console.log(`${this.nome} ${this.sobrenome}`);
};

// modifique o valor da propriedade preço pra 3000:
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// crie um objeto de um cachorro que represente um labrador preto de 10 anos, que late ao ver um homem

var animal = {
  especie: "cachorro",
  raca: "labrador",
  cor: "preto",
  idadeEmAnos: 10,
  comportamento(parametro) {
    if (parametro === "homem") {
      console.log("Latiu");
    } else {
      console.log("Não latiu");
    }
  },
};

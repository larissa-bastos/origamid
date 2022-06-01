// arrays e loops!
var jogos = ["Persona", "Hades", "Gris", "The Last of Us"];

for (var index = 0; index < jogos.length; index++) {
  console.log(jogos[index]);
}

// exercícios
// crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let brasilGanhouACopa = [1959, 1962, 1970, 1994, 2002];
// use um loop para mostrar no console a seguinte mensagem: o brasil ganhou a copa de x

for (let item = 0; item < brasilGanhouACopa.length; item++) {
  console.log(`O Brasil ganhou a copa em ${brasilGanhouACopa[item]}`);
}

// interaja com um loop nas frutas abaixo e pare ao chegar em pêra
var frutas = ["banana", "maçã", "pera", "uva", "melancia"];

for (var indice = 0; indice < frutas.length; indice++) {
  console.log(frutas[indice]);
  if (frutas[indice] === "pera") {
    break;
  }
}

//coloque a aultima fruta do array acima em uma variável, sem remover a mesma da array

var ultimaFrutaDaArray = frutas[frutas.length - 1];
console.log(`a última fruta é ${ultimaFrutaDaArray}`);

console.log(frutas);

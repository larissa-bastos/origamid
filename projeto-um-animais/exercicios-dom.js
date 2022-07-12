// exercicio 1 - retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

// ex 2 - retorne no console apenas as imagens que começarem com a palavra imagem

const imagensImg = document.querySelectorAll('img[src^= "img/imagem"]');
console.log(imagensImg);

// ex 3 - selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao h2');
console.log(animais);

//selecione o ultimo p do site (lenght-1?)

const paragrafo = document.querySelectorAll('p');
console.log(paragrafo[paragrafo.length - 1]);

/*
const imgs = document.querySelectorAll('img');
console.log(imgs);

const imgs = document.querySelectorAll('img');
console.log(imgs);
*/

/*imgs.forEach(function (item, index, array) {
  console.log(tem, index, array);
});*/

imgs.forEach((item, index) => {
  console.log(item, index);
});

// ex Mostre no console cada parágrafo no site
const parag = document.querySelectorAll('p');
parag.forEach((item) => console.log(item));

// mostre o texto dos parágrafos no console
parag.forEach((item) => {
  console.log(item.innerText);
});

// corrija os erros abaixo:
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

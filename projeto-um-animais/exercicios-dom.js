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

// exercícios de atributos e classes

/*const menu = document.querySelector('.menu');

menu.classList.add('teste', 'teste2');

menu.classList.remove('teste2');
menu.classList.toggle('teste');
console.log(menu.classList);

const img = document.querySelector('img');

console.log(img.getAttribute('alt'));

img.setAttribute('alt', 'Uma raposa olhando para o céu');

const altImg = img.getAttribute('alt');

console.log(altImg);
*/

//exercício 1 - adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(function (item) {
  item.classList.add('ativo');
  console.log(item);
});

//exercício 2 - remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach(function (item) {
  item.classList.remove('ativo');
});

itensMenu[0].classList.toggle('ativo');

// verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => console.log(img.hasAttribute('alt')));

// modifique o href do link externo no menu.

const linkExterno = document.querySelector('[href^="http://"]');
console.log(linkExterno);

linkExterno.setAttribute('href', 'http://google.com');

// exercícios de dimensões e distâncias

/*
const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais.clientHeight);

const height = listaAnimais.scrollHeight;
console.log(height);
 
const copy = document.querySelector('.copy');

const copyDistanciaEsquerda = copy.offsetLeft;
console.log(copyDistanciaEsquerda);

const contato = document.querySelector('.dados');

const rect = listaAnimais.getBoundingClientRect();
console.log(rect);

console.log(window.innerWidth);

*/

// exercícios distâncias e dimensões

// verifique a distância da primeira imagem em relação ao topo da página

const imagem1 = document.querySelector('img');
const imgDistanciaTopo = imagem1.offsetTop;
console.log(imgDistanciaTopo);

// retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((img) => {
    // foi onde eu cheguei - console.log(img.offsetWidth);
    soma = soma + img.offsetWidth;
    // se soma é 0 primeiro, sempre que for pra uma nova imagem ele vai pegar a largura do próximo pra somar, somando todas.
    // soma += img.offsetWidth é a mesma coisa.
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// como as imagens não carregam antes de iniciar o JS, precisamos definir que essa função só aconteça após todas as imagens terem carregado, por isso colocamos dentro da função onload.

// verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo (48px/48px de acordo com o google).

const linksPagina = document.querySelectorAll('a');

linksPagina.forEach((link) => {
  const larguraLinks = linksPagina.offsetWidth;
  const alturaLinks = linksPagina.offsetHeight;

  if (larguraLinks >= 48 && alturaLinks >= 48) {
    console.log(link, 'possui valor mínimo recomendado');
  } else {
    console.log(link, 'não possui o valor mínimo recomendado');
  }
});

// a base tava certa, mas eu errei os offsetHeight/width e não coloquei o forEach.

// se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');

const tamanhoBrowser = window.matchMedia('(max-width: 720px)').matches;

if (tamanhoBrowser) {
  menu.classList.add('menu-mobile');
}

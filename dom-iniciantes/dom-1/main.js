const h1Selecionado = document.querySelector('h1');


// exercício 1 - retorne a url da página atual utilizando o elemento window.

const urlAtual = window.location.href

console.log(urlAtual);

// selecione o primeiro elemento da página que possua a classe ativo

const classe = document.querySelector('.ativo');
// o querySelector já seleciona o primeiro. Existe outro, chamado querySelectorAll, que seleciona todos. 
console.log(classe);
// retorne a linguagem do navegador

console.log(navigator.language);

// retorne a largura da janela

console.log(window.innerWidth);

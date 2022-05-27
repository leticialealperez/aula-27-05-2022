"use strict";
let btnAcessar = document.getElementById('btn-acessar');
let btnCadastrar = document.getElementById('btn-cadastrar');
let container = document.getElementById('container');
btnAcessar.addEventListener('click', () => {
    container.classList.remove('painel-direito-ativo');
});
btnCadastrar.addEventListener('click', () => {
    container.classList.add('painel-direito-ativo');
});

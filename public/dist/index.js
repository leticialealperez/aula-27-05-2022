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
// CADASTRO DE UM USUARIO
let formularioCadastro = document.querySelector('#formulario-cadastro');
let inputCadastroNome = document.querySelector('#input-cadastro-nome');
let inputCadastroEmail = document.querySelector('#input-cadastro-email');
let inputCadastroSenha = document.querySelector('#input-cadastro-senha');
formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    verificaCampos();
});
function verificaCampos() {
    if (inputCadastroNome.value === '' || inputCadastroNome.value.length < 3) {
        inputCadastroNome.focus();
        inputCadastroNome.setAttribute('style', 'outline-color: red');
        return;
    }
    if (inputCadastroEmail.value === '' || inputCadastroEmail.value.length < 10) {
        inputCadastroEmail.focus();
        inputCadastroEmail.setAttribute('style', 'outline-color: red');
        return;
    }
    if (inputCadastroSenha.value === '' || inputCadastroSenha.value.length < 8) {
        inputCadastroSenha.focus();
        inputCadastroSenha.setAttribute('style', 'outline-color: red');
        return;
    }
    inputCadastroNome.removeAttribute('style');
    inputCadastroEmail.removeAttribute('style');
    inputCadastroSenha.removeAttribute('style');
    let novoUsuario = {
        nome: inputCadastroNome.value,
        login: inputCadastroEmail.value,
        senha: inputCadastroSenha.value,
        recados: []
    };
    cadastrarUsuario(novoUsuario);
}
function cadastrarUsuario(novoUsuario) {
    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let existe = listaUsuarios.some((usuario) => {
        return usuario.login === novoUsuario.login;
    });
    if (existe) {
        let confirma = confirm("Este e-mail já está cadastrado. Deseja ir para a página de login?");
        if (confirma) {
            container.classList.remove('painel-direito-ativo');
        }
        return;
    }
    listaUsuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
    alert('Conta criada com sucesso!');
    formularioCadastro.reset();
    setTimeout(() => {
        container.classList.remove('painel-direito-ativo');
    }, 1000);
}

/*
    Objetivo - quando clicarmos no botão temos que 
    mostrar a imagem de fundo correspondete 
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos Botões
//console.log(document.querySelectorAll('.botao'));
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens  = document.querySelectorAll('.imagem');
 
/*
 const botao1 = document.getElementById('botao1');
 botao1.addEventListener('click', () => {
    console.log('clicou botao 1')
 })

 const botao2 = document.getElementById('botao2');
 botao2.addEventListener('click', () => {
    console.log('clicou botao 2 segunda foto !!!!')
 })
 */
//passo 2 -dar um jeito de identificar o click do usuario no botao
botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o  botao clicando como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        // passo 5 - esconder a imagem ativa de fundo 
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botoesCarrossel = document.querySelector('.selecionado');
    botoesCarrossel.classList.remove('selecionado');
}

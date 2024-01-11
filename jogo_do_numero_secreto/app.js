let listaDeNumerosSorteados = [];
let numeroLimite = 4; 
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero de 1 a 10');
}
mensagemInicial()

function verificarChute() {
    chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `parabéns vc acertou o número com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'é menor o numero secreto');
        } else {
            exibirTextoNaTela('p', 'é maior o numero secreto');
        }
        tentativas++;
        limpar();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == numeroLimite ){
        listaDeNumerosSorteados = [];

    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpar () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limpar();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
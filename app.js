let listaDeNumerosSorteados = [];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//length , para fazer lista so precisa atribuir um atributo com = [x1,x2,x3]
//para chamar, voce so puxa a variavel com o atributo, ficando variavel[x4] para ver o indice 3 
//dado que listas começam com 0;
//variavel[variavel.length-1]; resulta o numero final da lista

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //So e possivel de ser feito pelo implemento responsivevoice
    //Ele se encontra presente a linha 7 da parte de html
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random() * numeroLimite+ 1);
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();//Recurssão,chamar a propria função novamente. 
    }else{
        console.log(listaDeNumerosSorteados);
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}








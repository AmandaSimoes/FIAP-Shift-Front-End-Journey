/**
 * Objetivo: Remover um adotante da lista
 * 1. Ouvir o evento de click no botão de remover.
 * 2. Remover o adotante da lista (do array, do html).
 */

const adotantes = [];

const btnProximo = document.querySelector('.btn-proximo');
const tabelaAdotantes = document.querySelector('#adotantes');
const corpoTabelaAdotantes = tabelaAdotantes.querySelector('tbody');

function criaElemento(nomeElemento, conteudo, classes) {
    
    const tag = document.createElement(nomeElemento);
    tag.textContent = conteudo;

    if(classes) {
        tag.setAttribute('class', classes);
    }
    return tag;
}

function criaLinhaTabelaParaAdotante(adotante) {
    const linha = criaElemento('tr');

    const colunaNome = criaElemento('td', adotante.nome);
    const colunaId = criaElemento('td', adotante.id);
    const colunaNascimento = criaElemento('td', adotante.dataNascimento);
    const colunaTelefone = criaElemento('td', adotante.whatsApp);
    const colunaAcoes = criaElemento('id', '');
    
    const btnRemover = criaElemento('button', 'Deletar', 'btn btn-primary btn-remover');

    // funciona, mas não é legal.
    // btnRemover.addEventListener('click', function () {
    //     linha.remove();
    // });
    
    colunaAcoes.append(btnRemover);

    linha.append(colunaId);
    linha.append(colunaNome);
    linha.append(colunaNascimento);
    linha.append(colunaTelefone);

    linha.append(colunaAcoes)

    return linha;
}

btnProximo.addEventListener('click', function (evento) {
    evento.stopPropagation();
    const inputName = document.querySelector('#full-name');
    const inputBrithday = document.querySelector('#birthday');
    const inputWhatsApp = document.querySelector('#whatsapp');

    const adotante = {
        id: adotantes.length,
        nome: inputName.value,
        dataNascimento: inputBrithday.value,
        whatsApp: inputWhatsApp.value,
    };

    adotantes.push(adotante); 
        
    
    const linhaNovoAdotante = criaLinhaTabelaParaAdotante(adotante);
    console.log('novo adotante:', adotantes);
    corpoTabelaAdotantes.append(linhaNovoAdotante);
});

corpoTabelaAdotantes.addEventListener('click', function(evento) {
    evento.stopPropagation();
    const elementoClicado = evento.target;
    if(elementoClicado.classList.contains('btn-remover')) {

        const linha = elementoClicado.parentNode.parentNode;
        const colunaId = linha.querySelector('td');
        const id = Number(colunaId.textContent);

        const indiceAdotante = adotantes.findIndex(function (adotante) {
            return adotante.id === id;
            /**
             * == igualdade (2 iguais): compara o valor fazendo uma possível coerção (conversão) do valor.
             * === identidade (3 iguais): compara o valor e o tipo da variável.
             */
        });

        if(indiceAdotante !== -1){
            adotantes.splice(indiceAdotante, 1);
            
            linha.remove();
            console.log('adotante removido:', adotantes);
        } else {
            console.error('adotante não encontrado', id, adotantes);
        }
    }
});

document.addEventListener('click', function() {
    console.log('alguma coisa foi clicada!');
});
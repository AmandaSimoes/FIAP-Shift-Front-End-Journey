const adotantes = [];

const btnProximo = document.querySelector('.btn-proximo');
const tabelaAdotantes = document.querySelector('#adotantes');
const corpoTabelaAdotantes = tabelaAdotantes.querySelector('tbody');

const criaElemento = (nomeElemento, conteudo, classes) => {
    const tag = document.createElement(nomeElemento);
    tag.textContent = conteudo;

    if(classes) {
        tag.setAttribute('class', classes);
    }
    return tag;
}

const criaLinhaTabelaParaAdotante = (adotante) => {
    const linha = criaElemento('tr');

    const colunaNome = criaElemento('td', adotante.name);
    const colunaNascimento = criaElemento('td', adotante.birthDate);
    const colunaTelefone = criaElemento('td', adotante.phone);
    const colunaAcoes = criaElemento('td', '');
    
    const btnRemover = criaElemento('button', 'Deletar', 'btn btn-primary btn-remover');

    btnRemover.setAttribute('data-adotante-id', adotante.id);
    
    colunaAcoes.append(btnRemover);

    linha.append(colunaNome);
    linha.append(colunaNascimento);
    linha.append(colunaTelefone);
    linha.append(colunaAcoes)

    return linha;
}

const atualizaTabelaComNovosAdotantes = () => {
    listaAdotantes((adotantesServidor) => {
        adotantes.splice(0, adotantes.length);
        adotantes.push(...adotantesServidor);

        const botoesDeRemover = corpoTabelaAdotantes.querySelectorAll('.btn-remover');
        const adotantesIdsNaTabela = [];
    
        if(botoesDeRemover !== null) {
            botoesDeRemover.forEach((botaoRemover) => {
                const adotanteId = botaoRemover.getAttribute('data-adotante-id');
                if(!adotantesIdsNaTabela.includes(adotanteId)) {
                    adotantesIdsNaTabela.push(adotanteId);
                }
            });
        }

        const novosAdotantes = adotantes.filter((adotante) => 
            !adotantesIdsNaTabela.includes(adotante.id))


        mostraAdotantesNaTabela(novosAdotantes);
    })

}

btnProximo.addEventListener('click', (evento) => {
    evento.stopPropagation();
    const inputName = document.querySelector('#full-name');
    const inputBrithday = document.querySelector('#birthday');
    const inputWhatsApp = document.querySelector('#whatsapp');

    const adotante = {
        name: inputName.value,
        birthDate: inputBrithday.value,
        phone: inputWhatsApp.value,
    };

    cadastraAdotante(adotante, atualizaTabelaComNovosAdotantes);        
    
    console.log('novo adotante:', adotantes);
});

corpoTabelaAdotantes.addEventListener('click', (evento) => {
    evento.stopPropagation();
    const elementoClicado = evento.target;
    if(elementoClicado.classList.contains('btn-remover')) {
        const id = elementoClicado.getAttribute('data-adotante-id');
        removeAdotante(id, (foiRemovido, mensagem) => {
            if(foiRemovido === true) {
                const linha = elementoClicado.parentNode.parentNode;

                const indiceAdotante = adotantes.findIndex((adotante) => adotante.id === id);

                console.log('adotante em remoção', id, indiceAdotante, adotantes);

                if(indiceAdotante !== -1){
                    adotantes.splice(indiceAdotante, 1);   
                    linha.remove();
                    console.log('adotante removido:', adotantes);
                } else {
                    console.error('adotante não encontrado', id, adotantes);
                }
            } else {
                console.error(mensagem);
            }
        });
      
    }
});

const colocaAdotanteNaTabela = (adotante) => {
    const linhaNovoAdotante = criaLinhaTabelaParaAdotante(adotante);
    corpoTabelaAdotantes.append(linhaNovoAdotante);
}

const mostraAdotantesNaTabela = (adotantes) => {
    adotantes.forEach(colocaAdotanteNaTabela);
}

window.addEventListener('DOMContentLoaded', () => {
    listaAdotantes(mostraAdotantesNaTabela);
});

const inputId = document.querySelector('#adotante-id');
const inputNome = document.querySelector('#full-name');
const inputDataNascimento = document.querySelector('#birthday');
const inputTelefone = document.querySelector('#whatsapp');
const buttonCadastro = document.querySelector('#btn-cadastro');
const tbodyAdotantes = document.querySelector("#adotantes tbody");
// DEVER DE CASA: Por que o form tá recarregando a página mesmo com o stopPropagation();

buttonCadastro.addEventListener('click', (evento) =>  {
    // evento.preventDefault(); // cancela o comportamento padrão do evento.
    evento.stopPropagation(); // cancela a propagação do evento para os elementos superiores onde o evento foi disparado

    const nome = inputNome.value;
    const dataNascimento = inputDataNascimento.value;
    const telefone = inputTelefone.value;
    const id = inputId.value;

    const adotante = [id, nome, dataNascimento, telefone];

    salvaAdotante(adotante);

    inputId.value = '';
    inputNome.value = '';
    inputDataNascimento.value = '';
    inputTelefone.value = '';

});



function atualizaTabelaDeAdotantes(adotantes) {
    tbodyAdotantes.innerHTML = '';
    adotantes.forEach((adotante) => {
        const colunaNome = document.createElement('td');
        const colunaDataNascimento = document.createElement('td');
        const colunaTelefone = document.createElement('td');
        const colunaAcoes = document.createElement('td');

        const btnDeletar = document.createElement('button');
        btnDeletar.classList.add('btn', 'btn-primary');
        btnDeletar.textContent = 'Remover';

        const btnAtualizar = document.createElement('button');
        btnAtualizar.classList.add('btn', 'btn-primary');
        btnAtualizar.textContent = 'Atualizar';
    
        const linhaTabela = document.createElement('tr');
    
        colunaNome.textContent = adotante[1];
        colunaDataNascimento.textContent = adotante[2];
        colunaTelefone.textContent = adotante[3];
        
        colunaAcoes.append(btnDeletar);
        colunaAcoes.append(btnAtualizar);
    
        linhaTabela.append(colunaNome);
        linhaTabela.append(colunaDataNascimento);
        linhaTabela.append(colunaTelefone);
        linhaTabela.append(colunaAcoes);

        
        btnDeletar.addEventListener('click', () => {
           removeAdotante(adotante[0])
           linhaTabela.remove(); 
        });

        btnAtualizar.addEventListener('click', () => {
            preencheFormulario(adotante);    
         });
      
        tbodyAdotantes.append(linhaTabela);
    });
}

function preencheFormulario (adotante) {
    // condicao ? casoVerdadeiro : casoFalso

    // inputId.value = adotante[0] !== undefined ? adotante[0] : '';
    // inputNome.value = adotante[1] !== undefined ? adotante[1] : '';
    // inputDataNascimento.value = adotante[2] !== undefined ? adotante[2] : '';
    // inputTelefone.value = adotante[3] !== undefined ? adotante[3] : '';
    
    inputId.value = adotante[0] ?? '';
    inputNome.value = adotante[1] ?? '';
    inputDataNascimento.value = adotante[2] ?? '';
    inputTelefone.value = adotante[3] ?? '';
}


const salvaAdotante = (adotante) => {
    const adotanteJSON = JSON.stringify({
        nome: adotante[1],
        dataNascimento: adotante[2],
        telefone: adotante[3],
    });


    const ehNovoAdotante = adotante[0] === '';
    const urlRequisicao = ehNovoAdotante 
        ? 'http://localhost:3000/adotantes' 
        : `http://localhost:3000/adotantes/${adotante[0]}`;


    const requisicao = fetch(urlRequisicao, {
        method: ehNovoAdotante ? 'post' : 'put',
        body: adotanteJSON,
        headers: {
            'content-type': 'application/json'
        }
    });

    requisicao
        .then(resposta => resposta.json())
        .then(adotante => listaAdotantes());
}

const listaAdotantes = () => {
    const requisicao = fetch('http://localhost:3000/adotantes');

    requisicao
        .then(resposta => resposta.json())
        .then(adotantes => {
            const adotantesArrays = adotantes.map(adotante => {
                return [adotante.id, adotante.nome, adotante.dataNascimento, adotante.telefone]
            });

            atualizaTabelaDeAdotantes(adotantesArrays);
        });
}

const removeAdotante = (idAdotante) => {
    fetch(`http://localhost:3000/adotantes/${idAdotante}`, {
        method: 'delete'
    });
}
/**
 * CRUD de Adotantes usando Arrays e DOM
 * 1. Adicionar adotante no array e no HTML
 * 2. Ler os adotantes e adicionar no HTML
 * 3. Atualizar os dados de um adotante.
 * 4. Deletar um adotante
 */

const adotantes = [];
const inputId = document.querySelector('#adotante-id');
const inputNome = document.querySelector('#full-name');
const inputDataNascimento = document.querySelector('#birthday');
const inputTelefone = document.querySelector('#whatsapp');
const buttonCadastro = document.querySelector('#btn-cadastro');
const tbodyAdotantes = document.querySelector("#adotantes tbody");

// console.log(buttonCadastro.classList.values())

// FASE 1; Fase 3, parte 3
buttonCadastro.addEventListener('click', () =>  {
    const nome = inputNome.value;
    const dataNascimento = inputDataNascimento.value;
    const telefone = inputTelefone.value;
    const id = inputId.value;

    const adotante = [nome, dataNascimento, telefone];

    if(id !== '') {
        adotantes[id] = adotante;
        atualizaTabelaDeAdotantes();
    } else {
        adotantes.push(adotante);
        console.log(adotantes);
        atualizaTabelaDeAdotantes();
    }

    inputId.value = '';
    inputNome.value = '';
    inputDataNascimento.value = '';
    inputTelefone.value = '';

});




// FASE 2; FASE 4;
function atualizaTabelaDeAdotantes() {
    tbodyAdotantes.innerHTML = '';
    adotantes.forEach((adotante, indiceAdotante) => {
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
    
        colunaNome.textContent = adotante[0];
        colunaDataNascimento.textContent = adotante[1];
        colunaTelefone.textContent = adotante[2];
        
        colunaAcoes.append(btnDeletar);
        colunaAcoes.append(btnAtualizar);
    
        linhaTabela.append(colunaNome);
        linhaTabela.append(colunaDataNascimento);
        linhaTabela.append(colunaTelefone);
        linhaTabela.append(colunaAcoes);

        // CLOSURE: Capacidade de uma função se lembrar de um valor que está fora do seu contexto.
        btnDeletar.addEventListener('click', () => {
           // adotantes.splice(indiceAdotante, 1);
           delete adotantes[indiceAdotante];
           linhaTabela.remove(); 
           console.log(adotantes);    
        });

        // FASE 3, Part 2; CLUSORE
        btnAtualizar.addEventListener('click', () => {
            preencheFormulario(adotante, indiceAdotante);    
         });
      
        tbodyAdotantes.append(linhaTabela);
    });
}


// FASE 3, Part 1
function preencheFormulario (adotante, indiceAdotante) {
    inputId.value = indiceAdotante;
    inputNome.value = adotante[0];
    inputDataNascimento.value = adotante[1];
    inputTelefone.value = adotante[2];
}
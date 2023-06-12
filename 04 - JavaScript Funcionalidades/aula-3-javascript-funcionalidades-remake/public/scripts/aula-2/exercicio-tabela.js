/** 
 * 1. Pegar os valores de todos os inputs da página quando o botão "próximo" for clicado. 
 * 2. Criar os elementos necessários para apresentar os dados do adotante na tabela.
 * 3. Adicionar uma nova linha na tabela com os dados do adotante.
 */

// FASE 1

const inputNome = document.querySelector('#full-name');
const inputDataNascimento = document.querySelector('#birthday');
const inputTelefone = document.querySelector('#whatsapp');
const buttonCadastro = document.querySelector('#btn-cadastro');
const tbodyAdotantes = document.querySelector("#adotantes tbody");



buttonCadastro.addEventListener('click', function () {
    const nome = inputNome.value;
    const dataNascimento = inputDataNascimento.value;
    const telefone = inputTelefone.value;


    // FASE 2
    const colunaNome = document.createElement('td');
    const colunaDataNascimento = document.createElement('td');
    const colunaTelefone = document.createElement('td');

    const linhaTabela = document.createElement('tr');

    colunaNome.textContent = nome;
    colunaDataNascimento.textContent = dataNascimento;
    colunaTelefone.textContent = telefone;

    linhaTabela.append(colunaNome);
    linhaTabela.append(colunaDataNascimento);
    linhaTabela.append(colunaTelefone);
  
    // FASE 3
    tbodyAdotantes.append(linhaTabela);
});
/**
 * Objetivo: Criar uma tabela de adotantes a partir dos dados do formulário.
 * 1. Buscar os inputs e capturar os valores inseridos.
 * 2. Salvar os dados do adotante em um array.
 * 3. Criar os elementos de linha e coluna de tabela para apresentar os dados do adotante.
 * 4. Inserir a nova linha de adotante na tabela.
 */

// cria array de adotantes
const adotantes = [];

const btnProximo = document.querySelector('.btn-proximo');

// PASSO 3: Cria um elemento de forma dinâmica.
function criaElemento(nomeElemento, conteudo, classes) {
    /**
     * uso: criaElement('button', 'Cadastra adotante', 'btn btn-primary');
     * resultado: <button class="btn btn-primary">Cadastra adotante</div>
     */
    const tag = document.createElement(nomeElemento);
    tag.textContent = conteudo;

    if(classes) {
        tag.setAttribute('class', classes);
    }
    return tag;
}

// PASSO 3: Cria linha e colunas do adotante.
function criaLinhaTabelaParaAdotante(adotante) {
    const linha = criaElemento('tr');

    const colunaNome = criaElemento('td', adotante.nome);
    const colunaId = criaElemento('td', adotante.id);
    const colunaNascimento = criaElemento('td', adotante.dataNascimento);
    const colunaTelefone = criaElemento('td', adotante.whatsApp);
    const colunaAcoes = criaElemento('id', '');
    
    const btnRemover = criaElemento('button', 'Deletar', 'btn btn-primary');
    
    colunaAcoes.append(btnRemover);

    /**
     * <td> <button class="btn btn-primary">Deletar</button> </td>
     */

    linha.append(colunaId);
    linha.append(colunaNome);
    linha.append(colunaNascimento);
    linha.append(colunaTelefone);

    linha.append(colunaAcoes)
    /**
     * <tr>
     *      <td>0</td>
     *      <td>Rodrigo Silva</td>
     *      <td>10/04/89</td>
     *      <td>11 02131-3123</td>
     *      <td><button class="btn btn-primary">Deletar</button></td>
     * </tr>
     */

    return linha;
}

btnProximo.addEventListener('click', function () {


    // PASSO 1: Buscando elementos do form
    const inputName = document.querySelector('#full-name');
    const inputBrithday = document.querySelector('#birthday');
    const inputWhatsApp = document.querySelector('#whatsapp');

    
    // PASSO 2: Salvar os dados do adotante em um Array. (PS: Usando um Objeto)
    const adotante = {
        id: adotantes.length,
        nome: inputName.value,
        dataNascimento: inputBrithday.value,
        whatsApp: inputWhatsApp.value,
    };

    // não posso
    // adotante = 'Raquel Matos';
    
    // posso:
    // adotante.nome = 'outro valor';

    // salvando adotante no array.
    adotantes.push(adotante);
    

    // PASSO 3:
    // td com todos os tds
    const tabelaAdotantes = document.querySelector('#adotantes');
    const corpoTabelaAdotantes = tabelaAdotantes.querySelector('tbody');
    const linhaNovoAdotante = criaLinhaTabelaParaAdotante(adotante);

    // PASSO 4:
    // inseriu uma nova linha na tabela.
    // corpoTabelaAdotantes.prepend(linhaNovoAdotante);
    corpoTabelaAdotantes.append(linhaNovoAdotante);
});
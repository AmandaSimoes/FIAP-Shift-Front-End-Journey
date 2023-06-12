//** Busca todos os adotantes fazendo um GET */

function listaAdotantes () {
    const listaAdotantesRequisicao = fetch('http://localhost:3000/adotantes');
    
    listaAdotantesRequisicao.then(resposta => {
        resposta.json().then(corpoDaResponsta => {
            console.log(corpoDaResponsta);
        })
    });
}


//** Cadastra um adotante fazendo um POST: adotante = ['nome', 'data-de-nascimento', 'telefone'] */
function cadastraAdotante(adotante) {
    const adotanteJSON = JSON.stringify({
        nome: adotante[0],
        dataNascimento: adotante[1],
        telefone: adotante[2]
    });
    

    const cradastraAdotanteRequisicao = fetch('http://localhost:3000/adotantes', {
        method: 'POST',
        body: adotanteJSON,
        headers: {
            'Content-Type': 'application/json'
        }  
    });

    cradastraAdotanteRequisicao.then(resposta => {
        resposta.json().then(corpoDaResponsta => {
            console.log(corpoDaResponsta);
        })
    });
}


// cadastraAdotante(['Carlos', '10/05/1983', '11123456789']);
// listaAdotantes();

//6d809ef0-5746-47d9-b303-c35718342cfb

//**  Atualizando um adotante com ID usando PUT */

function atualizaAdotante(idDoAdotante, adotante) {
    const adotanteJSON = JSON.stringify({
        nome: adotante[0],
        dataNascimento: adotante[1],
        telefone: adotante[2]
    });
    

    const atualizaAdotanteRequisicao = fetch(`http://localhost:3000/adotantes/${idDoAdotante}`, {
        method: 'PUT',
        body: adotanteJSON,
        headers: {
            'Content-Type': 'application/json'
        }  
    });

    atualizaAdotanteRequisicao.then(resposta => {
        resposta.json().then(corpoDaResponsta => {
            console.log(corpoDaResponsta);
        })
    });
}

// atualizaAdotante('6d809ef0-5746-47d9-b303-c35718342cfb', ['Rodrigo', '13/12/1990', '85987654321']);


//**  Deletando um adotante com ID usando DELETE */
function deletaAdotante(idDoAdotante) {
    const deletaAdotanteRequisicao = fetch(`http://localhost:3000/adotantes/${idDoAdotante}`, {
        method: 'DELETE',
    });

    deletaAdotanteRequisicao.then(resposta => {
        resposta.json().then(corpoDaResponsta => {
            console.log(corpoDaResponsta);
        }).catch(erro => {
            console.log(`deu erro ao transformar o corpo da requisição em JSON: ${erro.message}`);
        })
    });
}

// deletaAdotante('21780239-e3bd-44b5-89ca-364ca8c22246')
const cadastraAdotante = (adotante, callback) => {
    const requisicao = new XMLHttpRequest();
    const dados = JSON.stringify(adotante);

    requisicao.onreadystatechange = () => {
        if(requisicao.readyState === requisicao.DONE) {
            if(requisicao.status === 201){
                return callback('adotante foi cadastrado com sucesso!');
            }
            return callback('adotante não cadastrado por problemas no servidor');
        }
    }

    requisicao.open('POST', 'http://localhost:3000/adotantes');
    requisicao.setRequestHeader('content-type', 'application/json');
    requisicao.send(dados);
}


const listaAdotantes = (callback) => {
    const requisicao = new XMLHttpRequest();
    requisicao.onreadystatechange = () => {
        if(requisicao.readyState === requisicao.DONE) {
            if(requisicao.status === 200){
                const resposta = requisicao.responseText;
                
                const adotantes = JSON.parse(resposta);
                return callback(adotantes);
            }
            return callback('adotante não cadastrado por problemas no servidor');
        }
    }

    requisicao.open('GET', 'http://localhost:3000/adotantes');
    requisicao.send();
}

const removeAdotante = (id, callback) => {
    const requisicao = new XMLHttpRequest();
    requisicao.onreadystatechange = () => {
        if(requisicao.readyState === requisicao.DONE) {
            if(requisicao.status === 204){
                return callback(true, 'adotante foi removido com sucesso!');
            }
            return callback(false, 'adotante não cadastrado por problemas no servidor');
        }
    }

    requisicao.open('DELETE', `http://localhost:3000/adotantes/${id}`);
    requisicao.send();
}
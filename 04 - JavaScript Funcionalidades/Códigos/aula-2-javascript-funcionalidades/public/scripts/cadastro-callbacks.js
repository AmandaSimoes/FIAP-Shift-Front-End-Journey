/**
 * Objetivo: Cadastrar um adotante no servidor de forma assíncrona usando callbacks
 * 
 */

function cadastraAdotante(adotante, callback) {
    const requisicao = new XMLHttpRequest();
    const dados = JSON.stringify({
        adotante: {
            name: adotante.nome,
            birthdate: adotante.dataNascimento,
            phone: adotante.whatsApp
        }
    });

    requisicao.onreadystatechange = function () {
        if(requisicao.readyState === requisicao.DONE) {
            if(requisicao.status === 201){
                callback('adotante cadastrado com sucesso!');
            }
            callback('adotante não cadastrado por problemas no servidor');
        }
    }

    requisicao.open('POST', 'https://lkqfriibzxbudwuzowxl.functions.supabase.co/doghouse-rest');
    requisicao.setRequestHeader('content-type', 'application/json');
    requisicao.send(dados);
}
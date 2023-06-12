// ** impressora é um callback neste parametro
function imprimeNome(impressoraFn, nome) {
    impressoraFn(nome);
}

imprimeNome((valor) => { console.log(valor) }, 'Railson');
const adotantes = [ 'Maria Cecília', 'José Ferreira', 'Rodrigo Chaves', 'Amanda Rodrigues','Rodrigo Rodrigues',
    'Leonardo da Silva','Aline da Silva', 'Roberto Chaves'
];
const idadesDosAdotantes = [23, 29, 35, 40, 19, 15, 22];

const adotantesComSobreNomeRodrigues = adotantes.filter(function (adotanteNoArray){
    // Regex
    // toLowerCase

    // const nomeEmMinusculo = adotanteNoArray.toLowerCase(); // o nome fica todo em minúsculo.
    // return nomeEmMinusculo.includes('rodrigues');
    return adotanteNoArray.includes('Rodrigues');
});

const adotantesMaioresDeIdade = idadesDosAdotantes.filter(function (idadeAdotanteNoArray) {
    return idadeAdotanteNoArray >= 18;
});

const adotantesMenoresDeIdade = idadesDosAdotantes.filter(function (idadeAdotanteNoArray) {
    return idadeAdotanteNoArray <= 18;
});

const adotantesCom60Anos = idadesDosAdotantes.filter(function (idadeAdotanteNoArray) {
    return idadeAdotanteNoArray >= 60;
});





// console.log(adotantes);
// console.log(adotantesComSobreNomeRodrigues);
// console.log(adotantesMaioresDeIdade);
// console.log(adotantesMenoresDeIdade);
// console.log(adotantesCom60Anos);
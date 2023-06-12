const adotantes = [ 'Maria Cecília', 'José Ferreira', 'Rodrigo Chaves', 'Amanda Rodrigues','Rodrigo Rodrigues',
    'Leonardo da Silva','Aline da Silva', 'Roberto Chaves'
];
const idadesDosAdotantes = [23, 29, 35, 40, 19, 15, 22];

/** filter: cria um novo array com os elementos que atendem ao critério de filtragem */
const adotantesComSobreNomeRodrigues = adotantes.filter(
    (adotanteNoArray) => adotanteNoArray.includes('Rodrigues')
);

const adotantesMaioresDeIdade = idadesDosAdotantes.filter(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray >= 18
);

const adotantesMenoresDeIdade = idadesDosAdotantes.filter(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray <= 18
);

const adotantesCom60Anos = idadesDosAdotantes.filter(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray >= 60
);

/** includes: verifica se existe exatemente o valor buscado */
if (idadesDosAdotantes.includes(60)) {
    console.log('Tem pelo menos um adotante com 60 anos')
} else {
    console.log('Não temos nenhum adotante com 60 anos!')
}

/** some: verifica se pelo menos um dos items do array atende a um critério. */
const temosAlgumAdotanteMenorDeIdade = idadesDosAdotantes.some(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray <= 18
)

/** every: verifica se todos os items do array atendem a um critério. */
const todosAdotantesMaioresDeIdade = idadesDosAdotantes.every(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray >= 18
);

/** indexOf: busca um valor e devolve o índice em que o valor foi encontrado ou -1 pra dizer que não foi encontrado */
const indiceDaIdade40 = idadesDosAdotantes.indexOf(40);
// idadesDosAdotantes[indiceDaIdade40] = 41;

/** findIndex */
const indiceDaIdade22 = idadesDosAdotantes.findIndex(
    (idadeAdotanteNoArray) => idadeAdotanteNoArray === 22
)

// console.log(adotantes);
// console.log(adotantesComSobreNomeRodrigues);
// console.log(adotantesMaioresDeIdade);
// console.log(adotantesMenoresDeIdade);
// console.log(adotantesCom60Anos);
// console.log(temosAlgumAdotanteMenorDeIdade);
// console.log(todosAdotantesMaioresDeIdade);
// console.log(indiceDaIdade40);
console.log(indiceDaIdade22);
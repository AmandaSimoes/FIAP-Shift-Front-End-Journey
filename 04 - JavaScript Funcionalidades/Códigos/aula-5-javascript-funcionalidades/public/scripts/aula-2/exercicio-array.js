const adotantes = [ 
    ['Maria Cecília', 29], 
    ['José Ferreira', 32],
    ['Rodrigo Chaves', 18],
    ['Amanda Rodrigues', 24],
    ['Rodrigo Rodrigues', 22],
    ['Leonardo da Silva', 19],
    ['Aline da Silva', 15],
    ['Roberto Chaves', 40]
];

const adotantesFiltrados1 = adotantes.filter(
    (adotante) => adotante[0].includes('Rodrigues') && adotante[1] >= 20 
);


const adotantesFiltrados2 = adotantes.filter(
    function (adotante) {
        return adotante[0].includes('Silva') && adotante[1] >= 18
    }
);


console.log(adotantesFiltrados1);
console.log(adotantesFiltrados2);
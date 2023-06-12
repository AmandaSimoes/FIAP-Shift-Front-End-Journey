const adotantes2 = [ 
    ['Maria Cecília', 29], 
    ['José Ferreira', 32],
    ['Rodrigo Chaves', 18],
    ['Amanda Rodrigues', 24],
    ['Rodrigo Rodrigues', 22],
    ['Leonardo da Silva', 19],
    ['Aline da Silva', 15],
    ['Roberto Chaves', 40]
];

// const nomeDosAdotantes = [];

// adotantes2.forEach(adotante => {
//     nomeDosAdotantes.push(adotante[0]);
// });


const nomeDosAdotantes = adotantes2.map(adotante => adotante[0])
console.log(nomeDosAdotantes);


// const relatorioDosAdotantes = adotantes2.map(adotante => {
//     return `Nome do adotante: ${adotante[0]} | Idade do Adotante: ${adotante[1]} anos.`;
// })
// console.log(relatorioDosAdotantes);


// const relatorioDosAdotantes = adotantes2.map((adotante, indice) => {
//     return `Adotante ${indice + 1}: ${adotante[0]} | Ano de nascimento: ${2023 - adotante[1]}`;
// })
// console.log(relatorioDosAdotantes);
// console.log(adotantes2);

// 45
const relatorioDosAdotantes = adotantes2.map((adotante, indice) => {
    return `Adotante ${indice + 1}: ${adotante[0]} | Adotante ativo em 10 anos? ${(adotante[1] + 10) >= 45 ? 'Não' : 'Sim'}`;
})
console.log(relatorioDosAdotantes);

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


// const somaDasIdades = adotantes2.reduce(
//     (acumulador, adotante) => { const soma = acumulador + adotante[1]; return soma;}, 
//     0
// );

// console.log(somaDasIdades);



// const somaDasIdades = adotantes2.reduce((acumulador, adotante) => { 
//     let soma = 0;
//     if(Array.isArray(acumulador)) {
//         soma = acumulador[1] + adotante[1]; 
//     } else {
//         soma = acumulador + adotante[1];
//     }
//     return soma;
// });

// console.log(somaDasIdades);

// const somaDasIdades = adotantes2.reduce((acumulador, adotante) => { 
    
//     if(Array.isArray(acumulador)) {
//         return acumulador[1] + adotante[1]; 
//     } else {
//         return acumulador + adotante[1];
//     }
    
// });

// console.log(somaDasIdades);


// const somaDasIdades = adotantes2.reduce((acumulador, adotante) => { 
//     if(Array.isArray(acumulador)) {
//         return acumulador[1] + adotante[1]; 
//     } 

//     return acumulador + adotante[1]; 
// });

// console.log(somaDasIdades);

const somaDasIdades = adotantes2.reduce(
    (acumulador, adotante) => acumulador + adotante[1],
    0
);

console.log(somaDasIdades);
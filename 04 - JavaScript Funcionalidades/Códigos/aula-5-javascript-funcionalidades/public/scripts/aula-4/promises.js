// const promessa = new Promise((comprirPromessa, descomprirPromessa) => {
//     const valores = [1,2,3,4,5,6,7];
//     const soma = valores.reduce((acumulador, numero) => acumulador + numero, 0);
    
    
//     comprirPromessa(soma);
// });

// promessa.then(total => {
//     console.log(total);
// })


const promessa = new Promise((comprirPromessa, descomprirPromessa) => {
    const valores = [1,2,3,4,5,6,7];
    const soma = valores.reduce((acumulador, numero) => acumulador + numero, 0);
    
    descomprirPromessa(soma);
});

promessa
    .then(total => { console.log(`promessa comprida: ${total}`) })
    .catch(total => { console.log(`promessa descomprida: ${total}`) })

const numeros = [10, 5, 25, 1, 17, 9, 8, 32];
const adotantesArray = [
    {
      id: 1,
      nome: 'Ricardo'  
    },
    {
        id: 2,
        nome: 'Ana'  
    },
    {
        id: 3,
        nome: 'Joana'  
    },
]

const maioresQue10 = numeros.filter(function (numero){
    return numero > 10;
});

const menoresQue10 = numeros.filter(function (numero){
    return numero < 10;
});

const multiplicadosPor10 = numeros.map(function (numero) {
    return numero * 10;
});

const nomesDosAdotantes = adotantesArray.map(function (adotante) {
    return adotante.nome;
});

const total = numeros.reduce(function(acumulador, valorAtual ){
    return acumulador + valorAtual;
}, 10);

console.log('menores que 10: ', menoresQue10);
console.log('maiores que 10: ', maioresQue10);
console.log('multiplicados por 10', multiplicadosPor10);
console.log('nome dos adotantes', nomesDosAdotantes);
console.log('total da soma dos números: ', total)
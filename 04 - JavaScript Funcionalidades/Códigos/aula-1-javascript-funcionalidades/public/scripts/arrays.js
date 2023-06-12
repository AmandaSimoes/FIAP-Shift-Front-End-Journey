const numeros = [10, 5, 25, 1, 17, 9, 8, 32];

const maioresQue10 = numeros.filter(function (numero){
    return numero > 10;
});

const menoresQue10 = numeros.filter(function (numero){
    return numero < 10;
});

console.log('menores que 10: ', menoresQue10);
console.log('maiores que 10: ', maioresQue10);
const adotantes = [];

adotantes.push('Maria Cecília','José Ferreira','Rodrigo Chaves','Amanda Rodrigues','Leonardo da Silva');

console.log(adotantes);

delete adotantes[2];

console.log('adotante no índice 2', adotantes[2]);

console.log(adotantes);

adotantes.splice(4, 1);

console.log(adotantes);

adotantes.splice(0, 1);

console.log(adotantes);
console.log('adotante no índice 0', adotantes[0]);

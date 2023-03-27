/*

Elabore um programa que receba o nome do usuário e o seu gênero da seguinte forma:
[ M ] para masculino
[ F ] para feminino
[ O ] outro
[ N ] não responder

Exiba uma mensagem final da seguinte forma:
“Olá, Alexandre! Você escolheu a seguinte opção de gênero: M”
Dica: utilize o tipo char para o gênero.


*/

const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");

console.log();

console.log(`
[ M ] para masculino
[ F ] para feminino
[ O ] outro
[ N ] não responder
`);
let genero = prompt("Selecione seu gênero: ");

console.log(`Olá, ${nome}! Você escolheu a seguinte opção de gênero: ${genero}`)
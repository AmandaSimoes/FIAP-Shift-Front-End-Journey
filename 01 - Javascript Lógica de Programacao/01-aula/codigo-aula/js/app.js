// console.log("Olá mundo referenciado");


// // STRING
// let nome;
// nome = "Bernardo";
// console.log(nome);
// console.log(typeof(nome));

// console.log();
// console.log("----------------");
// console.log();

// // NUMERO - NUMBER
// let idade;
// idade = 30;
// console.log(idade);
// console.log(typeof(idade));

// console.log();
// console.log("----------------");
// console.log();


// console.log("Oi, Alexandre! Você tem 23 anos.");
// console.log("Oi, " + nome + "! Você tem " + idade + " anos.");
// console.log(`Oi, ${nome}! Você tem ${idade} anos.`);




// // NUMERO - NUMBER
// let preco = 25.90;
// console.log(preco);
// console.log(typeof(preco));

// console.log();
// console.log("----------------");
// console.log();

// // LÓGICO - BOOLEAN
// let logado;
// logado = true; // VERDADEIRO
// console.log(logado);
// console.log(typeof(logado));

console.log();
console.log("----------------");
console.log();


// COERÇÃO EXPLICITA!!!

// Number()
// let valor = "123";
// console.log(typeof(valor));
// valor = Number(valor);
// console.log(typeof(valor));

// Boolean()
// let valorLogico = "";
// console.log(typeof(valorLogico));
// valorLogico = Boolean(valorLogico);
// console.log(valorLogico);


// String()
// let ligado = true;
// console.log(ligado);

// ligado = String(ligado);
// console.log(ligado);
// console.log(typeof(ligado));

// var peso = 55;
// console.log(peso);

// Conversão String p/ Number
// let textoNumero = "10";
// textoNumero = parseInt(textoNumero);
// console.log(textoNumero);


// --------------------
// PROMPT
// --------------------

const prompt = require("prompt-sync")();

let nomeDigitado = prompt("Digite seu nome: ");
console.log(nomeDigitado);

// NPM -- NODE PACKAGE MANAGER
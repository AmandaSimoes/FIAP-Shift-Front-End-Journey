// OPERADORES RELACIONAIS

// >    MAIOR QUE
// <    MENOR QUE
// >=   MAIOR OU IGUAL

// !=   DIFERENTE QUE
// ==   IGUAL QUE

// ===  ESTRITAMENTE IGUAL
// !==  ESTRITAMENTE DIFERENTES

// console.log(5 >= 5);

// let idade = 18;
// // console.log(idade <= 18);

// let nome = "";
// // console.log(nome != "");

// let num1 = "1";
// let num2 = 1;

// console.log(num1 !== num2)

// --------------------------------------


// OPERADORES LOGICOS

// E    &&
// OU   ||
// NOT  !


// LÓGICA E
// E-MAIL       SENHA       ENTRAR NO SISTEMA
// TRUE         TRUE        TRUE
// TRUE         FALSE       FALSE
// FALSE        TRUE        FALSE
// FALSE        FALSE       FALSE

// let email = "a@b.com";
// let senha = "123";


// console.log(email == "a@b.com");
// console.log(senha == "1234");

// let verificaEmail = email == "a@b.com";
// let verificaSenha = senha == "1234";
// console.log(verificaEmail && verificaSenha);


// LÓGICA OU
// SOLZAO       JOGO BR     CHURRAS NO DOM.
//  TRUE        TRUE        TRUE
//  TRUE        FALSE       TRUE
//  FALSE       TRUE        TRUE
//  FALSE       FALSE       FALSE


// let sol = false;
// let jogo = false;
// let temperatura = 12;

// console.log(sol || jogo || (temperatura > 22));



// console.log();
// console.log();


// let valorLogico = true;
// console.log(!valorLogico);





// VERIFICAÇÃO DO VOTO OPCIONAL

let idade = 16;

let verificaIdade1 = idade >= 16 && idade < 18;
console.log(verificaIdade1);

let verificaIdade2 = idade > 70;
console.log(verificaIdade2);


// APLICAÇÃO DO OU
console.log(verificaIdade1 || verificaIdade2);
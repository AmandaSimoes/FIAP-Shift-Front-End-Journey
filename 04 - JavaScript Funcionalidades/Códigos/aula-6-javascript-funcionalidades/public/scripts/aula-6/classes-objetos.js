// /** Classe com Médoto */

// class Adotante {
//     adota (nomeDoPet) {
//         console.log(`Acabei de adotar o ${nomeDoPet}! Meu novo Pet!`);
//     }
// }

// const ricardo = new Adotante();

// ricardo.adota('Lessy');

// /** Classe com Médoto e Atributos */

// class Adotante {
//     id;
//     nome;
//     dataNascimento;
//     telefone;
   
//     adota (nomeDoPet) {
//         console.log(`Acabei de adotar o ${nomeDoPet}! Meu novo Pet!`);
//     }
// }

// const ricardo = new Adotante();

// ricardo.id = 1;
// ricardo.nome = 'Ricardo Teles';
// ricardo.dataNascimento = '10/05/1993';
// ricardo.telefone = '88 123456789';

// ricardo.adota('Lessy');

// console.log(ricardo);

/** Classe com Médoto e Atributos (construtores, etc.) */
// Encapsulamento = forma de esconder código para simplificar os métodos públicos.

class Adotante {
    #id;
    #nome;
    #dataNascimento;
    #telefone;

    constructor(nome, dataNascimento, telefone) {
        this.#setNome(nome);
        this.#setDataNascimento(dataNascimento);
        this.#setTelefone(telefone);
        console.log('criando um novo objeto do tipo adotante!')
    }

    setId(id) {
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    #setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    #setDataNascimento(dataNascimento) {
        this.#dataNascimento = dataNascimento;
    }

    getDataNascimento() {
        return this.#dataNascimento;
    }

    #setTelefone(telefone) {
        this.#telefone = telefone;
    }

    getTelefone() {
        return this.#telefone;
    }

    adota (nomeDoPet) {
        console.log(`Acabei de adotar o ${nomeDoPet}! Meu novo Pet!`);
    }
}

const ricardo = new Adotante('Ricardo Teles', '10/05/1993', '88 123456789');
ricardo.setId(1);
console.log(ricardo.getNome());

const aline = new Adotante('Aline Motta', '19/10/1995', '11 987654321');
aline.setId(2);
console.log(aline.getNome());

console.log(ricardo, aline);
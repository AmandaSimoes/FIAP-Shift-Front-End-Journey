// Pets: Cães e Gatos: Passaros, Lagartos, etc.
class Animal {
    #nome
    constructor (nome) {
        this.#nome = nome;
    }

    fazBarulho(som) {
        console.log(som);
    } 

    getNome() {
        return this.#nome;
    }
}
// É um animal, mais especificamente, um cachorro.
class Cachorro extends Animal {
    fazBarulho() {
        // this = este objeto
        /// super = referência para a classe mãe desse objeto.
        super.fazBarulho('uau uau uau');
    }
}

// É um animal, mais especificamente, um gato.
class Gato extends Animal {
    fazBarulho() {
        super.fazBarulho('miau miau miau');
    }
}

class Adotante {
    #id;
    #nome;
    #dataNascimento;
    #telefone;
    #pets = [];

    constructor(nome, dataNascimento, telefone) {
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#telefone = telefone;
    }

    adota (pet) {
        if(pet instanceof Animal) {
            this.#pets.push(pet);
            console.log(`Acabei de adotar o ${pet.getNome()}! Meu novo Pet!`);
        } else {
            console.error('Informe um pet que seja do tipo Animal')
        }
    }
}

const ricardo = new Adotante('Ricardo Teles', '10/05/1993', '88 123456789');
const jao = new Cachorro('Jão');
ricardo.adota(jao);

const aline = new Adotante('Aline Motta', '19/10/1995', '11 987654321');
const bilu = new Gato('Bilu');
aline.adota(bilu);
aline.adota('Lagarto');

console.log(ricardo, aline);
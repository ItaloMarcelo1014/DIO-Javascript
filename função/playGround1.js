function calculaIdade(anos) {
    return `Daqui a ${anos} anos , ${this.nome} terá ${
        this.idade + anos   
    } anos de idade. `;
}

const pessoa1 = {
     nome : 'Maria',
     idade: 30
};

const pessoa2 = {
    nome : 'Ariana',
    idade :26
};

const animal = {
    nome: 'pipoca',
    idade: 5,
    raca: 'schitsu',
};

console.log(calculaIdade.apply(pessoa1, [8]));
const lista = [
    {
        nome: 'OMO',
        preco: 35
    },
    {
        nome: 'Cafe',
        preco: 4
    },
    {
        nome: 'toalha',
        preco: 40
    },
];

const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current) {
     return prev - current.preco;
    }, saldoDisponivel);
}

console.log('Seu troco e de R$: ', calcularSaldo(saldoDisponivel, lista));



/*
  
function calcularSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
     console.log('rodada ', index + 1);
     console.log('troco ', { prev });
     console.log({ current });
     return prev - current.preco;
    }, saldoDisponivel);
}
 */
function filtraPares(arr) {
    return arr.filter(callback,);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Estes são numeros Pares ' , filtraPares(meuArray));

//meu teste

function filtarImapar(array) {
    return array.filter(callbackI);
}

function callbackI(item1){
    return item1 % 2 !== 0;
}

console.log('Esses são numeros Impas ', filtarImapar(meuArray));
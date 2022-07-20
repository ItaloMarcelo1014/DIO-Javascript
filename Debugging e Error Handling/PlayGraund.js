function ReceberArray(array, nums) {
   try {
    
    if( !array && !nums ) throw new ReferenceError('Envie os parametos');

    if(typeof array !== 'object') throw new TypeError('Array precisa ser do tipo object');
   

    if(typeof nums !== 'number') throw new TypeError('Nums precisa ser do tipo Number');

    if(array.length !== nums ) throw new RangeError('Tamanho invalido !');

    return array;
   }
   catch (e) {
    if(e instanceof ReferenceError) {
        console.log('Este erro e um ReferenceError!');
        console.log(e.message);
    }else if(e instanceof TypeError) {
        console.log('Este erro e um TypeError!');
        console.log(e.message);
    }else if(e instanceof RangeError) {
        console.log('Este erro e um RangeError!');
        console.log(e.message);
    }else{
        console.log('tipo de erro não esperado:' + e );
    }
   }
}

console.log(ReceberArray([1, 2, 3, 4, 5], 0));

function somaNumeros(arr1){
   return arr1.reduce(function(prev, current) {
    console.log({ prev });
    console.log({ current }); 
    return prev + current;
    } ,0);
}

const arr1 = [1, 2];

console.log('o valor final e ' , somaNumeros(arr1));
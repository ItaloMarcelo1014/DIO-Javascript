function substituirPares(array) {
   if(!array.length) return -1;
   for (let i =0; i < array.length; i++){
     if(array[1] === 0){
        console.log("voce já e zero")
     }else if (array[i] % 2 === 0) {
        console.log(`Substitindo ${array[i]} por 0..` );
        array[i] = 0;
     }
   } 
   return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituirPares([]));
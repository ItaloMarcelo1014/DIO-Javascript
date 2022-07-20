// solução 1

function verificarPolindromo(string){
    if(!string) return 'string inexistente';

    return string.split('').reverse().join('') === string;
}
console.log(verificarPolindromo('ovo'));

//solução 2
// omo 
// 012
//abbade
// 012345
function verificarPolindromo2(string){
    if (!string) return 'string inexistente';

    for(let i = 0; i < string.length / 2; i++){
       if(string[i] !== string[string.length - 1 - i]){
        return false;
       }
    }

    return true;
}

console.log(verificarPolindromo2('abba'));
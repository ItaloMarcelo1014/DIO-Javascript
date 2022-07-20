function compararNumeros(num1, num2) {
    if(!num1 || !num2)
         return 'Defina dois numeros!';

    const primeiraFrase = criarPrimeiraFrase(num1 ,num2);
    const SegundaFrase =  criarPrimeiraFrase(num1 ,num2);

    return `${primeiraFrase}  ${SegundaFrase}`;
  
}

function criarPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
       saoIguais = 'não'
    }


    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais`
}


function criarSegundaFrase(num1, num2){
    const soma = num1 + num2 ;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const comparar10 = soma > 10;
    const comparar20 = soma > 20;
 
    if( comparar10){
    resultado10 ='maior'
 }
    
   if(comparar20){
    resultado20 = 'maior'
   }

  return `Sua soma e ${soma}, que e ${resultado10} que 10 e ${resultado20} que 20.`

}

console.log( compararNumeros(20, 20));
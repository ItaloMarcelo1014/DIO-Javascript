const alunos = [
    {
        nome: 'Ariana',
        nota: 5,
        turma: '3B',
    },
    {
        nome: 'Andiara',
        nota: 9,
        turma: '2A'
    }, 
    {
    nome: 'Marcelo',
    nota:10,    
    turma: '1A,'
    },
    {
    nome: 'Ze',
    nota:4,    
    turma: '9A,'
    },
];



function alunosAprovados(arr, media){
  
    let aprovados = [];

   for(let i = 0; i < arr.length; i++){
   
    const {nota, nome} = arr[i];

    if(nota >= media) {
        aprovados.push(nome);
      }
   }
   return aprovados;
}
console.log(alunosAprovados(alunos, 5));
function getAdmins(map){
     let admins = [];
    for([key, value] of map){
    if(value === 'Admin'){
        admins.push(key);
    }
   }
   return admins;
}

const usuarios = new Map();

usuarios.set('ariana', 'Admin');
usuarios.set('italo', 'Admin');
usuarios.set('andiara', 'User');
usuarios.set('Marzia', 'Admin');

console.log(getAdmins(usuarios));
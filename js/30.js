const usuario= new Promise((resolve,reject)=>{
    const aut=false;

    if (aut) {
        resolve('autenticado'); //el promise se cumple 
    } else {
        reject('no se pudo iniciar sesion'); //el no promise se cumple
    }
});

// console.log(usuario)

usuario
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error))




// en los promises existen 3 valores 
// -pending: no se ha cumplido pero tampoco rechazado
// -fulfilled: se cumplió
// rejected: se rechazó o no se cumplió
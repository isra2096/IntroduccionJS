// arrow functions

const sumar=(n1,n2)=>{
    console.log(n1+n2);
}
sumar(5,10);


const aprendiendo =(tecnologia)=>{
    console.log('aprendiendo ',tecnologia)
}

aprendiendo('javascript')








// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach((mes)=> {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Some ideal para arreglo de objetos
resultado1 = carrito.some((producto)=> {
    return producto.nombre === 'Celular PRO'
})

// Reduce
resultado2 = carrito.reduce((total, producto)=> {
    return total + producto.precio
}, 0);


// Filter
resultado3 = carrito.filter((producto) =>{
    return producto.precio > 400
});

resultado4 = carrito.filter((producto)=> {
    return producto.nombre !== 'Celular'
});

console.log(resultado1,resultado2,resultado3,resultado4);





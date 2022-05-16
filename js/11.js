// objetos

const producto={
    nombre:"monitor",
    precio:300,
    disponible:true
}

// forma anterior
const precioP=producto.precio
const nombreP=producto.nombre

console.log(precioP)
console.log(nombreP)


// destructuring
const {precio, nombre}=producto
console.log(precio)
console.log(nombre)
// async await 

function descargarClientes(){
    return new Promise(resolve=>{
        console.log("Descargando...");

        setTimeout(() => {
            console.log("los clientes fueron descargados");
        }, 5000);
    })
}

function descargarPedidos(){
    return new Promise(resolve=>{
        console.log("Descargando pedidos...");

        setTimeout(() => {
            console.log("los pedidos fueron descargados");
        }, 3000);
    })
}

async function app() {
    try {
        // const clientes=descargarClientes();
        // const pedidos=descargarPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        constresultado=await Promise.all([descargarClientes(),descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }    
}


console.log("Este codigo no se bloquea");

app();
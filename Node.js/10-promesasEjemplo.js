function estatusPedido(){
    let estatus = Math.random() < 0.7;
    return estatus;
}
/*
for(let i = 0; i < 10; i++){
    console.log(estatusPedido());
};
*/
// estructura principal de la promesa
const miPedidoDeTacos = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve("Pedido exitoso. Tus tacos estan en camino.");
        } else {
            reject("Error en el pedido. Volver a internar hacer el pedido.");
        }
    }, 3000);
});
// definimos los mensajes que van a ser recibidos de acuerdo al estatusPedido
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};
/*
function manejarPedido(mensajeDeConfirmacion){
    console.log(mensajeDeConfirmacion);
}
*/
const manejarRechazo = (mensajeDeError) => {
    console.log(mensajeDeError);
};
// mandamos a llamar el metodo then para el entonces de la promesa
//                      exito           rechazo
miPedidoDeTacos.then(manejarPedido, manejarRechazo);

// escribiremos la forma equivalente y reducida de lo anterior
miPedidoDeTacos
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .then(null, (mensajeDeError) => {
        console.log(mensajeDeError);
    });
// aun mas conciso con el metodo ".catch"
miPedidoDeTacos
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });
// aun mas mas conciso y el que usaremos por que este nos ayuda a poner mas intrucciones
// en las funciones a ejecutar.
miPedidoDeTacos.then(manejarPedido).catch(manejarRechazo);
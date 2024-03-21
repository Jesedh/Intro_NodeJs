// Promesa(dentro de una funcion) como retorno de la funcion
// para poder mandarle el producto.
function ordenarPedido(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de Internet "Warrior"`);
        setTimeout(() => {
            if (producto === "cargador"){
                resolve(`${producto}, ordenado.`);
            } else {
                reject("Producto no disponible en inventario actualmente.");
            }
        }, 2000);
    });
};
// promesa asincrona que se ejecuta con 4seg de retraso
function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log("Procesando orden...");
        console.log(`La orden fue: ${respuesta}`);
        setTimeout(() => {
            resolve(`Gracias por tu compra. Disfruta tu ${respuesta}.`);
        }, 4000);
    });
};
// empezamos a encadenar las promesas
let productoComprado = "cargador";
/*ordenarPedido(productoComprado)
    .then(respuesta => {
        console.log("Respuesta recibida en then1.");
        console.log(respuesta); // resolve: #cargador, ordenado
        return procesarPedido(respuesta); // aqui encadenamos la segunda promesa
    })
    .then(respuestaProcesada => {
        console.log("Esta siendo procesada la respuesta en then2.");
        console.log(respuestaProcesada);
    })
    .catch(err => {
        console.log(err); // reject: # Producto no disponible en inventario actualmente.
    });
*/
// con async await el codigo se reduce y nos permite ordenarlo internamente como sincrono
async function realizaPedido(producto){
    try {
        const respuesta = await ordenarPedido(producto);
        console.log(respuesta);
        const productoProcesado = await procesarPedido(respuesta);
        console.log(productoProcesado);
    } catch (error){
        console.log(error);
    };
};
// mandamos a llamar a la funcion
realizaPedido(productoComprado);
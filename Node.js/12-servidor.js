// importamos el modulo para crear el servidor http
const http1 = require("http");
// creamos el servidor y finalizamos la respuesta
const servidor = http1.createServer((req, res) => {
    console.log("solicitud nueva...");
    res.end("Hola mundo, mi nombre es Jesedh Guerrero y soy programador.");
});
// colocamos el servidor en modo de escucha en el puerto 3000
let  puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});
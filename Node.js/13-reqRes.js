// importamos el modulo
const http = require("http");

const servidor = http.createServer((req, res) =>{
    /*console.log("===> req (solicitud o peticion)");
    console.log(req.url); // url de la solicitud entrante
    console.log(req.method); // para visualizar el tipo de peticion o metodo solicitad
    console.log(req.headers); // cabezera de la solicitud*/

    console.log("===> res (respuesta)");
    console.log(res.statusCode); // 200 OK

    res.statusCode = 404;
    console.log(res.statusCode); // 4004 Not Found

    res.end("Hola");
});

let puerto = 3000;
servidor.listen(puerto, () =>{
    console.log("El servidor esta escuchando.")
});
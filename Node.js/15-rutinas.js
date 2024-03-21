// importamos los modulos que utilizaremos
const http = require("http");
const cursos = require("./15-cursos.js");
// creamos el servidor
const servidor = http.createServer((req, res) => {
    const {method} = req;
    console.log(`El metodo es: ${method}`);
    console.log(`El path es: ${req.url}`);
    switch (method) {
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        case "PUT":
            return manajearSolicitudPUT(req, res);
        case "DELETE":
            return manajearSolicitudDELETE(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por la servidor ${method}`);
    };
});
// definimos la funcion GET
function manejarSolicitudGET(req, res){
    let path = req.url; // path == camino

    if (path === "/") { // si estamos en la paguina web principal
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end("Bienvenidos a mi primer servidor y API creados con node.js");
    } else if (path === "/cursos") {
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === "/cursos/programacion") {
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else {
        res.statusCode = 404;
    res.end("El recurso solicitado no existe...");
    };
};
// definimos la funcion POST
function manejarSolicitudPOST(req, res){
    const path = req.url;
    if(path === "/cursos/programacion"){

        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString(); // concatenar como una cadena de caracteres
        });
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            // convetir a un objeto de javascritp
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.lenguaje);
            res.end("EL servidor recibio una solicitud POST en /cursos/programacion");
        });
    };
};
// definimos la funcion PUT
function manajearSolicitudPUT(req, res){
    const path = req.url;
    if(path === "/"){
        res.statusCode = 200;
        res.end("EL servidor recibio una solicitud PUT para actualizar por completo un recurso");
    };
};
// definimos la funcion DELETE
function manajearSolicitudDELETE(req, res){
    const path = req.url;
    if(path === "/"){
        res.statusCode = 200;
        res.end("EL servidor recibio una solicitud DELETE para eliminar un recurso");
    };
};
// definimos el servidor en modo de escucha
let puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el ${puerto}`);
});
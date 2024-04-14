// importamos los modulos a utilizar
const express = require("express");
// importamos el archivo js donde tenemos los datos
const baseDatos = require("../datos/baseDatos.js");
const programacion = baseDatos.infoCursos.programacion;
//const {programacion} = require("../datos/baseDatos.js").infoCursos; // esta linea reduce las 2 anteriores

const routerProgramacion = express.Router(); // creamos el router
// Middleware o intermediario
// para que nos permita trabajar con el body de la solicitud
routerProgramacion.use(express.json());

////// METODO GET
routerProgramacion.get("/", (req, res) => { // muestra todos los cursos de progra
    res.send(JSON.stringify(programacion));
});
// ahora definimos las rutas para los lenguajes de programacion
routerProgramacion.get("/:lenguaje", (req, res) => { // filtra por lenguaje
    let lenguaje = req.params.lenguaje;
    // res.send(lenguaje); // python
    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje);

    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    };

    //console.log(req.query.ordenar) // vistas
    if (req.query.ordenar === "vistas"){ // ordena por vistas
        return res.send(JSON.stringify(resultados.sort((a,b) => a.visitas - b.visitas)));
    };
    res.send(JSON.stringify(resultados)); // muestra los resultados
});
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => { // muestra por lengauje y nivel
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontro cursos de ${lenguaje} de nivel ${nivel}`);
    };
    res.send(JSON.stringify(resultados));
});

//// METODO POST
routerProgramacion.post("/", (req, res) => {
    let nuevoCurso = req.body;
    programacion.push(nuevoCurso);
    res.send(JSON.stringify(programacion));
});

//// METODO PUT
routerProgramacion.put("/:id", (req, res) => {
    let cursoModificado = req.body;
    let id = req.params.id;

    let indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoModificado;
    };

    res.send(JSON.stringify(programacion));
});

//// METODO PATCH
routerProgramacion.patch("/:id", (req, res) => {
    const InfoModificada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, InfoModificada);
    };
    res.send(JSON.stringify(programacion));
});

//// METODO DELETE
routerProgramacion.delete("/:id", (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    
    if(indice >= 0){
        programacion.splice(indice, 1);
    };
    res.send(JSON.stringify(programacion));
});

// exportar el modulo
module.exports = routerProgramacion;
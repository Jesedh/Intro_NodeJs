// importamos los modulos a utilizar
const express = require("express");

const baseDatos = require("../datos/baseDatos.js");
const programacion = baseDatos.infoCursos.programacion;
//const {programacion} = require("../datos/baseDatos.js").infoCursos;

const routerProgramacion = express.Router();

// Cursos de programacion
routerProgramacion.get("/", (req, res) => {
    res.send(JSON.stringify(programacion));
});
// ahora definimos las rutas para los lenguajes de programacion
routerProgramacion.get("/:lenguaje", (req, res) => {
    let lenguaje = req.params.lenguaje;
    // res.send(lenguaje); // python
    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje);
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    };
    //console.log(req.query.ordenar) // vistas
    if (req.query.ordenar === "vistas"){
        return res.send(JSON.stringify(resultados.sort((a,b) => a.visitas - b.visitas)));
    };
    res.send(JSON.stringify(resultados));
});
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontro cursos de ${lenguaje} de nivel ${nivel}`);
    };
    res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;
// importamos los modulos a utilizar
const express = require("express");

const baseDatos = require("../datos/baseDatos.js");
const matematicas = baseDatos.infoCursos.matematicas;
// const {matematicas} = require("../datos/baseDatos.js").infoCursos;

const routerMatematicas = express.Router();

// Cursos de matematicas
routerMatematicas.get("/", (req, res) => {
    res.send(JSON.stringify(matematicas));
});
routerMatematicas.get("/:rama", (req, res) => {
    const rama = req.params.rama;
    const resultados = matematicas.filter(curso => curso.rama == rama);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${rama}`);
    };
    res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;
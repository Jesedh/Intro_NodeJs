// importamos los modulos a utilizar
const express = require("express");
const BD = require("./baseDatos.js");

// Routing o rutas de acceso a nuestra API
// Rutas para el metodo GET
const app = express();
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos 💻");
});
app.get("/api/cursos", (req, res) => {
    res.send(BD.infoCursos);
});

// Cursos de programacion
app.get("/api/cursos/programacion", (req, res) => {
    res.send(JSON.stringify(BD.infoCursos.programacion));
});
// ahora definimos las rutas para los lenguajes de programacion
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
    let lenguaje = req.params.lenguaje;
    // res.send(lenguaje); // python
    const resultados = BD.infoCursos.programacion.filter(curso => curso.lenguaje == lenguaje);
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    };
    res.send(JSON.stringify(resultados));
});

// Cursos de matematicas
app.get("/api/cursos/matematicas", (req, res) => {
    res.send(JSON.stringify(BD.infoCursos.matematicas));
});
app.get("/api/cursos/matematicas/:rama", (req, res) => {
    const rama = req.params.rama;
    const resultados = BD.infoCursos.matematicas.filter(curso => curso.rama == rama);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${rama}`);
    };
    res.send(JSON.stringify(resultados));
});

// Definimos el puerto donde el servidor va estar escuchando
const puerto = process.env.PORT || 3000; // si estamos alojando nuestro servidor
app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`);
});
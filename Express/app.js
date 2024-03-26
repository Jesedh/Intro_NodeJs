// importamos los modulos a utilizar
const express = require("express");

const baseDatos = require("./datos/baseDatos.js");
const infoCursos = baseDatos.infoCursos;
//const {infoCursos} = require("./datos/baseDatos.js");

// creamos una instancia de express esto crea la aplicacion o API
const app = express();

// Routers
const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);

const routerMatematicas = require("./routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

// Routing o rutas de acceso a nuestra API
// Rutas para el metodo GET
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos 💻");
});
app.get("/api/cursos", (req, res) => {
    res.send(infoCursos);
});

// Definimos el puerto donde el servidor va estar escuchando
const puerto = process.env.PORT || 3000; // si estamos alojando nuestro servidor
app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`);
});
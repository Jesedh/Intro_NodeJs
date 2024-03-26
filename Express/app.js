// importamos los modulos a utilizar
const express = require("express");
const BD = require("./baseDatos.js");

// creamos una instancia de express
const app = express();

// Routers
const routerProgramacion = express.Router();
app.use("/api/cursos/programacion", routerProgramacion);
const routerMatematicas = express.Router();
app.use("/api/cursos/matematicas", routerMatematicas);

// Routing o rutas de acceso a nuestra API
// Rutas para el metodo GET
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express. Cursos 💻");
});
app.get("/api/cursos", (req, res) => {
    res.send(BD.infoCursos);
});

// Cursos de programacion
routerProgramacion.get("/", (req, res) => {
    res.send(JSON.stringify(BD.infoCursos.programacion));
});
// ahora definimos las rutas para los lenguajes de programacion
routerProgramacion.get("/:lenguaje", (req, res) => {
    let lenguaje = req.params.lenguaje;
    // res.send(lenguaje); // python
    const resultados = BD.infoCursos.programacion.filter(curso => curso.lenguaje == lenguaje);
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
    const resultados = BD.infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontro cursos de ${lenguaje} de nivel ${nivel}`);
    };
    res.send(JSON.stringify(resultados));
});

// Cursos de matematicas
routerMatematicas.get("/", (req, res) => {
    res.send(JSON.stringify(BD.infoCursos.matematicas));
});
routerMatematicas.get("/:rama", (req, res) => {
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
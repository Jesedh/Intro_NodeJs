// creamos un objeto de javascript
let curso1 = {
    nombre: "curso de node.js",
    numVistas: 456678,
    numLikes: 23456,
    lenguajes:["javascript", "node.js"],
    esPublic: false
}

const curso = require("./7-curso.json");

//console.log(curso.nombre);
console.log(curso1);
console.log(typeof curso1);

// De un objeto de javascript a una cadena de caracteres tipo string
let infocursoJSON = JSON.stringify(curso1);
console.log(infocursoJSON);
console.log(typeof infocursoJSON);

// cadena de caracteres a objeto de js
let cursoOrginal = JSON.parse(infocursoJSON);
console.log(cursoOrginal);
console.log(typeof cursoOrginal);
console.log(cursoOrginal.esPublic);
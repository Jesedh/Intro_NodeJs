// importamos el modulo saludo.js
const saludo = require("./1-saludo.js");
// importamos con la sintaxis de desestructuracion
const { saludar, holaMundo } = require("./1-saludo.js");

// imprimimos el resultado de la funcion saludar que se encuentra en el modulo saludo.js
console.log(saludo.saludar("Jesedh"));
saludo.holaMundo();
// defenimos la funcion saludar que recibe un parametro nombre
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
// definimos una segunda funcion para exportar
function holaMundo(){
    console.log("!Hola mundo¡");
}
// exportamos la funcion saludar de este modulo
//module.exports.saludar = saludar;
//module.exports.holaMundo = holaMundo;
module.exports = {
    saludar: saludar,
    holaMundo: holaMundo
};
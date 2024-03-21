// el modulo fs, sirve para cambiar el nombre, editar, crear un archivo, etc
const fs = require("fs");
/*
// leer un archivo
fs.readFile("./6-index.html", "utf-8", (err, contenido) => {
    if (err){
        console.log(err);
    }else{
        console.log(contenido);
    }
});
*/
/*
// para cambiar el nombre de un archivo
fs.rename("./6-index.html", "6-main.html", (err) => {
    if (err) {
        throw err;
    }
    console.log("nombre cambiado exitosamente");
}); // nos permite cambiar el nombre de un archivo
*/
// para agregar copntenido al final del archivo
/*fs.appendFile("./6-index.html", "<p>hola</p>", (err) => {
    if (err) {
        throw err;
    }
    console.log("contenido agregado exitosamente");
});
*/
// reemplazar todo el contenido del archivo
/*fs.writeFile("6-index.html", "contendio nuevo", (err) => {
    if (err){
        throw err;
    }
    console.log("Contenido reemplazado");
});
*/
// eliminar archivos
fs.unlink("6-index copy.html", (err)=>{
    if(err){
        throw err;
    }
    console.log("archivo eliminado correctamente")
});

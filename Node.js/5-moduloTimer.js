// sirve para ejecutar codigo despues de cierto periodo de tiempo(milisegundo)
// para procesos asincronos. 1 segundo = 1000 milisegundos

function mostrarTema(tema){
    console.log(`El tema que estoy aprendiendo es ${tema}`);
}
setTimeout(mostrarTema, 3000, "Node.js");

function sumar(a, b){
    console.log(a + b);
}
setTimeout(sumar, 2000, 5, 6);

// setImmediate, sirve para ejecutar una funcion de manera asincrona o despues
// de los eventos sincronos.
console.log("Antes de setImmediate");
setImmediate(mostrarTema, "JavaScript");
console.log("Despues de setImmediate");

// setInterval, sirve para ejecutar na funcion cada cierto tiempo de manera ciclica
setInterval(mostrarTema, 3000, "CSS");
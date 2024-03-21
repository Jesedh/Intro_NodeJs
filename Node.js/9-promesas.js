// promise
// objeto (javascript) que representa el eventual resultado de una operacion asincrona

// el objeto se asocia a un callback function
// Dentro del cuerpo de la función callback(funcion que se pasa a otra funcion),
// puedes manejar los resultados de la operación asíncrona como desees incluso el erro

const promesaCumplida = false;
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida){
            resolve("¡Promesa cumplida!");
        } else {
            reject("¡Promesa rechazada!");
        }
    }, 4000);
});
 
let manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

let manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
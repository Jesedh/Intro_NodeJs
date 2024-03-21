/*Has hecho una compra y sabes el precio del producto y su iva.
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resultado de
multiplicar precio por el iva y dividir entre 100. */

// definimos las variables a utilizar
let precio_producto = 200;
let iva = 21;

// creamos la funcion que calculara el precio total del producto
function calculadora_precio_final (){
    let iva_producto = (precio_producto * iva / 100);
    return (precio_producto + iva_producto);
}

// llamamos a la funcion y lo imprimos en pantalla
console.log(`El precio total del producto es: ${calculadora_precio_final()}`)
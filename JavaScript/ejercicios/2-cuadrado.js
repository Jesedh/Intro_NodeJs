/*En una variable tienes el lado de un cuadrado,
debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado.
El perímetro es la suma de los cuatro lados.
*/

// creamos la funcion que calcula el area y el perimnetro de un cuadrado
function area_perimetro(tamaño_lado){
    
    let lados_cuadrado = 4;
    console.log("El perimetro del cuadrado es: ", tamaño_lado*4);
    console.log("El area del cuadrado es:", tamaño_lado*tamaño_lado);
}

// llamamos a la funcion
area_perimetro(40);
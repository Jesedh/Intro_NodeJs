// uso del ciclo for
let animales = ["perro", "gato", "mamut"];
for (let animal of animales){
    console.log(animal);
}
// programa que multiplica cada valor del arreglo por 2
function multiplicar(numero){
    console.log(numero * 2);
}
let numeros = [5, 23, 6, 76, 23];
for (let numero of numeros){
    multiplicar(numero);
}
// uso del ciclo while
let entero = 100;
let final = 105;
while(entero <= final){
    console.log(entero);
    entero++;
}
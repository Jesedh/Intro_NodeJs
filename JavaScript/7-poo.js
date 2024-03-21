// objeto con propiedades y un metodo
let javascript = {
    nombre:"JavaScript",
    año:1995,
    descripcion: function(){
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
};

console.log(javascript.nombre);
javascript.descripcion(); // mandamos a llamar a la al metodo como si fuera una funcio

// creamos una clase
class lenguaje {
    constructor(nombre, año){
        this.nombre = nombre;
        this.año = año;
    }
    descripcion(){
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
}
// creamos un objeto a partir de la clase
let python = new lenguaje("Python", 1989);
python.descripcion();

let html = new lenguaje("html", 1993);
html.descripcion();

let css = new lenguaje("css", 1996);
css.descripcion();
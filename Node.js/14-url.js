// URL: dirrecion de un recurso en la WEB
// https://www.paginaweb.mx/cursos/web
// protocolo + subdominio + dominio + dominio de nivel superior + archivo o path

// creamos un objeto de la clase URL que incluye node.js
const miUrl = new URL("https://www.ejemplo.org/cursos/web?ordenar=vistas&nivel=1");

// motremos los metodos que tiene la clase URL
console.log(miUrl.hostname); // www.ejemplo.org
console.log(miUrl.pathname); // cursos/web
console.log(miUrl.searchParams); // ?ordenar=vistar&nivel=1
console.log(typeof miUrl.searchParams); // para identificar el tipo de valor
console.log(miUrl.searchParams.get("ordenar"));


// Express
// Es el framework mas popular para node.js
// Servi para crear servidores super rapidos, minimalistas, muy escalables

// CRUD : Es un acronimo de las consultas basicas para datos almacenados.
let operacionesBasica = {
    Create : "POST",
    "Read" : "GET",
    "Update" : "PUT",
    "Delete" : "DELETE"
};
console.log(operacionesBasica);

// API : interfaz de programacion de aplicaciones
// permite que un software ofrezca un servicio a otro software
// que 2 aplicaciones se comuniquen entre si (servidor y cliente)
// es decir, una API es el intermediario entre el servidor y el cliente.
// Analogia: en un restaurante, el menu(API) sirve para que el comensal(cliente)
// se comunique con el cocinero(servidor).
// No es usada directamente por el usuario, sino por el programador que usa la API
// para implementar su programa.
// Finalmente, yo entiendo que las api's sirven para que se comuniquen los servidores
// con los clientes, pero los servidores tambien pueden ser clientes para otros
// servidores, a excepcion del cliente final que se comunica desde el navegador,
// por lo que, los servidores tienen que crear sus api's para que se puedan comunicar
// otros servidores con ellos. Entendiendo que los servidores son aplicaciones
// de software.
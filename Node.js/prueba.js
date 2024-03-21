const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("Hello world, este es mi primer servidor.");
});

servidor.listen(3000, () => {
  console.log("El servidor se esta ejecutando en el puerto 3000");
});
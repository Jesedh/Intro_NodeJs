// modelos intregados en node.js

const os = require("os"); // modulos del sistema

console.log(os.type()); // nos arroja el tipo de sistema que estamos usando
os.homedir(); // nos arroja la ruta principal del usuario
os.uptime(); // cuanto tiempo se ha estado ejecutando el sistema
os.userInfo(); // nos arroja la informacion sobre el usuario

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor ingresa tu nombre: ', (nombre) => {
  console.log(`Hola, ${nombre}!`);
  rl.close();
});

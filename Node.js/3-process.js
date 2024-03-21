// el modulo process, muestra los procesos internos del sistema de node.js

//console.log(process.argv);
//console.log(process.argv[2]);

// node 3-process.js 1 2 3
//    0           1  2 3 4

for (let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}
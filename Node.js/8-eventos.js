const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (total, descuento) => { //event handlers
    console.log(`Se ha realizado una compra por $${total} menos el descuento de
    $${descuento}, el total es de $${total-descuento}`)
});

emisorProductos.on("venta", () => {
    console.log("Se ha realizado una venta.")
});

emisorProductos.emit("compra", 500, 100);
emisorProductos.emit("venta");
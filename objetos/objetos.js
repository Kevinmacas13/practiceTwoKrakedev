probarAtributos = function () {
  let persona = {
    nombre: "Pedro",
    apellido: "Morales",
    edad: 24,
    estaVivo: true,
  };
  console.log(persona.apellido);
  console.log(persona.edad);
  if (persona.estaVivo) {
    console.log("esta vivo");
  } else {
    console.log("no esta vivo");
  }
};
crearProducto = function () {
  let producto1 = {
    nombre: "camisa",
    precio: 14.5,
    stock: 10,
  };
  let producto2 = {
    nombre: "pelota",
    precio: 5.25,
    stock: 20,
  };
  console.log(producto1.nombre);
  console.log(producto2.precio);
  if (producto1.stock > producto2.stock) {
    console.log(" Producto 1 tiene mayor stock");
  } else if (producto1.stock < producto2.stock) {
    console.log(" Producto 2 tiene mayor stock");
  } else console.log("Ambos productos tienen el mismo stock");
};

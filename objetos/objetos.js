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

modificarAtributos = function () {
  let cuenta = {
    numero: "5323423423",
    saldo: 0.0,
  };
  cuenta.saldo = 100;
  cuenta.saldo += 10;
  console.log(cuenta.saldo);
};
crearCliente = function () {
  let cliente = {
    cedula: "1750023952",
    nombre: "Juan",
  };
  let cliente1 = {};

  cliente1.nombre = "Romero";
  cliente1.apellido = "Salcedo";
  cliente1.cedula = "1710636893";
};

incrementarSaldo = function (cuenta, monto) {
  cuenta.saldo += monto;
};

determinarMayor = function (persona1, persona2) {
  if (persona1.edad > persona2.edad) {
    return persona1;
  } else if (persona2.edad > persona1.edad) {
    return persona2;
  } else {
    return null;
  }
};

probarIncrementoSaldo = function () {
  let cta = { numero: "23424", saldo: 34.0 };
  incrementarSaldo(cta, 50);
  console.log(cta.saldo);
};

probarDeterminarMayor = function () {
  let per1 = {
    nombre: "Daniel",
    edad: 24,
  };

  let per2 = {
    nombre: "Pedro",
    edad: 26,
  };
  let mayor;
  mayor = determinarMayor(per1, per2);
  if (mayor != null) {
    console.log("El mayor es: " + mayor.nombre);
  }
};

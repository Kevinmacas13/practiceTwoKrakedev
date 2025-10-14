let clientes = [
  { cedula: "1725464646", nombre: "Juan", edad: 20 },
  {
    cedula: "1725464641",
    nombre: "Mario",
    edad: 22,
  },
  {
    cedula: "1725464616",
    nombre: "Tomas",
    edad: 32,
  },
];

crearCliente = function () {
  let valorNombre = recuperarTexto("txtNombre");
  let valorCedula = recuperarTexto("txtCedula");
  let valorEdad = recuperarInt("txtEdad");
  let nuevoCliente = {};
  nuevoCliente.nombre = valorNombre;
  nuevoCliente.cedula = valorCedula;
  nuevoCliente.edad = valorEdad;
  agregarCliente(nuevoCliente);
};

agregarCliente = function (cliente) {
  let resultado;
  resultado = buscarCliente(cliente.cedula);
  if (resultado == null) {
    clientes.push(cliente);
  } else {
    alert("ya existe el cliente con cédula: " + cliente.cedula);
  }
};
buscarCliente = function (cedula) {
  let elementoCliente;
  let clienteEncontrado = null;
  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    if (elementoCliente.cedula == cedula) {
      clienteEncontrado = elementoCliente;
      break;
    }
  }
  return clienteEncontrado;
};
mostrarClientes = function () {
  let contenidoTabla = "<table>";
  let elementoCliente;
  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    contenidoTabla +=
      "<tr><td>" +
      elementoCliente.cedula +
      "</td><td>" +
      elementoCliente.nombre +
      "</td><td>" +
      elementoCliente.edad +
      "</td></tr>";
  }
  contenidoTabla += "</table>";
  elementoCliente = document.getElementById("tablaClientes");
  elementoCliente.innerHTML = contenidoTabla;
};
ejecutarBusqueda = function () {
  let valorCedula = recuperarTexto("txtCedulaBusqueda");
  let cliente = buscarCliente(valorCedula);

  if (cliente == null) {
    alert("cliente no encontrado");
  } else {
    mostrarTextoEnCaja("txtCedula", cliente.cedula);
    mostrarTextoEnCaja("txtNombre", cliente.nombre);
    mostrarTextoEnCaja("txtEdad", cliente.edad);
  }
};

guardarCambios = function () {
  let valorNombre = recuperarTexto("txtNombre");
  let valorCedula = recuperarTexto("txtCedula");
  let valorEdad = recuperarInt("txtEdad");
  let nuevoCliente = {
    cedula: valorCedula,
    nombre: valorNombre,
    edad: valorEdad,
  };
  modificarCliente(nuevoCliente);
};
modificarCliente = function (cliente) {
  let clienteEncontrado = buscarCliente(cliente.cedula);
  if (clienteEncontrado != null) {
    clienteEncontrado.nombre = cliente.nombre;
    clienteEncontrado.edad = cliente.edad;
  }
  mostrarClientes();
};

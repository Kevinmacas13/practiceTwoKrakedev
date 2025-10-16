let esNuevo = false;
let roles = [];
let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
  {
    cedula: "1053579415",
    nombre: "Miguel",
    apellido: "Perez",
    sueldo: 850.0,
  },
];

mostrarEmpleados = function () {
  let mostrarTabla;
  mostrarTabla = "<table>";
  mostrarTabla +=
    "<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>";
  for (let i = 0; i < empleados.length; i++) {
    mostrarTabla +=
      "<tr><td>" +
      empleados[i].cedula +
      "</td><td>" +
      empleados[i].nombre +
      "</td><td>" +
      empleados[i].apellido +
      "</td><td>" +
      empleados[i].sueldo +
      "</td></tr>";
  }
  mostrarTabla += "</table>";
  document.getElementById("tablaEmpleados").innerHTML = mostrarTabla;
};
mostrarOpcionEmpleados = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
  mostrarImagen("imgEmpleado", "./imagenes/empleado.jpg");
  mostrarEmpleados();
  deshabilitarComponentes();
};
mostrarOpcionRol = function () {
  mostrarComponente("divRol");
  ocultarComponente("divEmpleado");
  ocultarComponente("divResumen");
  mostrarImagen("imgRol", "./imagenes/rol.png");
  deshabilitarComponente("btnGuardar1");
};
mostrarOpcionResumen = function () {
  mostrarComponente("divResumen");
  ocultarComponente("divEmpleado");
  ocultarComponente("divRol");
  mostrarImagen("imgResumen", "./imagenes/resumen.png");
};

ejecutarNuevo = function () {
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar1");
  esNuevo = true;
};

buscaEmpleado = function (cedula) {
  let empleado;
  let empleadoEncontrado = null;
  for (i = 0; i < empleados.length; i++) {
    empleado = empleados[i];
    if (empleado.cedula == cedula) {
      empleadoEncontrado = empleados[i];
      break;
    }
  }
  return empleadoEncontrado;
};

agregarEmpleado = function (empleado) {
  let existeEmpleado;
  existeEmpleado = buscaEmpleado(empleado.cedula);
  if (existeEmpleado == null) {
    empleados.push(empleado);
    return true;
  } else {
    return false;
  }
};

guardar = function () {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldo = recuperarFloat("txtSueldo");
  let cumple = false;
  if (cedula.length == 10) {
    cumple = true;
  } else {
    cumple = false;
    mostrarTexto("lblErrorCedula", "Debe tener exactamente 10 caracteres");
  }
  if ((nombre.length > 3) & esMayuscula(nombre)) {
    cumple = true;
  } else {
    cumple = false;
    mostrarTexto(
      "lblErrorNombre",
      "todos los carecters deben ser letras mayúsculas"
    );
  }
  if ((apellido.length > 3) & esMayuscula(apellido)) {
    cumple = true;
  } else {
    cumple = false;
    mostrarTexto(
      "lblErrorApellido",
      "al menos 3 mayusculas todos los carecters deben ser letras mayúsculas"
    );
  }
  if (sueldo >= 400 && sueldo <= 5000) {
    cumple = true;
  } else {
    cumple = false;
    mostrarTexto("lblErrorSueldo", "número flotante entre 400 y 5000");
  }
  if (cumple) {
    if (esNuevo) {
      let empleado = {};
      empleado.cedula = cedula;
      empleado.nombre = nombre;
      empleado.apellido = apellido;
      empleado.sueldo = sueldo;
      let agregado = agregarEmpleado(empleado);
      if (agregado) {
        alert("EMPLEADO GUARDADO CORRECTAMENTE");
        mostrarEmpleados();
        esNuevo = false;
      } else {
        alert("YA EXISTE UN EMPLEADO CON  LA CEDULA " + empleado.sueldo);
        let empleadoEncontrado = buscaEmpleado(empleado.cedula);
        empleadoEncontrado.nombre = recuperarTexto("txtNombre");
        empleadoEncontrado.apellido = recuperarTexto("txtApellido");
        empleadoEncontrado.sueldo = recuperarFloat("txtSueldo");
        alert("EMPLEADO MODIFCADO EXITOSAMENTE");
        mostrarEmpleados();
      }
    }
  }
  deshabilitarComponentes();
};
esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};

deshabilitarComponentes = function () {
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

ejecutarBusqueda = function () {
  let cedula = recuperarTexto("txtBusquedaCedula");
  let empleadoEncontrado = buscaEmpleado(cedula);
  if (empleadoEncontrado == null) {
    alert("EMPLEADO NO EXISTE");
  } else {
    mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
    mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
    mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
    mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
  }
  console.log("entro");
};

limpiar = function () {
  mostrarTextoEnCaja("txtCedula", "");
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtSueldo", "");
  esNuevo = false;
  deshabilitarComponentes();
};

buscarPorRol = function () {
  let cedula = recuperarTexto("txtBusquedaCedulaRol");
  let empleadoEncontrado;
  empleadoEncontrado = buscaEmpleado(cedula);
  if (empleadoEncontrado != null) {
    mostrarTexto("infoCedula", empleadoEncontrado.cedula);
    mostrarTexto(
      "infoNombre",
      empleadoEncontrado.nombre + " " + empleadoEncontrado.apellido
    );
    mostrarTexto("infoSueldo", empleadoEncontrado.sueldo);
  }
};

calcularAporteEmpleado = function (sueldoEmpleado) {
  let aporte;
  aporte = (9.45 * sueldoEmpleado) / 100;
  return aporte;
};

calcularValorAPagar = function (sueldoEmpleado, aporteIees, descuento) {
  let valorPagar;
  valorPagar = sueldoEmpleado - aporteIees - descuento;
  return valorPagar;
};

calcularRol = function () {
  let sueldo = recuperarFloatDiv("infoSueldo");
  descuento = recuperarTexto("txtDescuentos");
  if (descuento >= 0 && descuento <= sueldo) {
    let aporteIees = calcularAporteEmpleado(sueldo);
    let valorAPagar = calcularValorAPagar(sueldo, aporteIees, descuento);
    mostrarTexto("infoIESS", aporteIees);
    mostrarTexto("infoPago", valorAPagar);
    habilitarComponente("btnGuardar1");
  }
};
buscarRol = function (cedula) {
  let roll;
  let rolEncontrado = null;
  for (let i = 0; i < roles.length; i++) {
    roll = roles[i];
    if (roll.cedula == cedula) {
      rolEncontrado = roles[i];
      break;
    }
  }
  return rolEncontrado;
};
agregarRol = function (rol) {
  let existeRol = false;
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].cedula == rol.cedula) {
      console.log("Ya existe el rol");
      existeRol = true;
      break;
    } else {
      existeRol = false;
    }
  }
  if (existeRol == false) {
    roles.push(rol);
    console.log("Rol agregado");
  }
};

calcularAporteEmpleador = function (sueldo) {
  let pagoEmpleador;
  pagoEmpleador = (11.15 * sueldo) / 100;
  return pagoEmpleador;
};
guardarRol = function () {
  let aporteEmpleado = recuperarFloatDiv("infoIESS");
  let valorAPagar = recuperarFloatDiv("infoPago");
  let nombre = recuperarTextoDiv("infoNombre");
  let cedula = recuperarTextoDiv("infoCedula");
  let sueldo = recuperarFloatDiv("infoSueldo");
  let aporteEmpleador;
  aporteEmpleador = calcularAporteEmpleador(sueldo);
  let rol = {};
  rol.cedula = cedula;
  rol.nombre = nombre;
  rol.sueldo = sueldo;
  rol.valorAPagar = valorAPagar;
  rol.aporteEmpleado = aporteEmpleado;
  rol.aporteEmpleador = aporteEmpleador;
  agregarRol(rol);
  deshabilitarComponente("btnGuardar1");
};

let esNuevo = false;
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
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};
mostrarOpcionRol = function () {
  mostrarComponente("divRol");
  ocultarComponente("divEmpleado");
  ocultarComponente("divResumen");
  mostrarImagen("imgRol", "./imagenes/rol.png");
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
  habilitarComponente("btnGuardar");
  esNuevo = true;
};

let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
];

mostrarOpcionEmpleados = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
  mostrarImagen("imgEmpleado", "./imagenes/empleado.jpg");
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

let personas = [
  { nombre: "Marcos", edad: 18 },
  { nombre: "Roberto", edad: 15 },
  { nombre: "Kate", edad: 25 },
  { nombre: "Diana", edad: 12 },
  { nombre: "Benja", edad: 5 },
];

agregarPersona = function () {
  let nombrePersona;
  let edadPersona;
  let valido = false;

  nombrePersona = recuperarTexto("txtNombre");
  if (nombrePersona.length > 3) {
    valido = true;
  } else {
    valido = false;
    mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres");
  }
  edadPersona = recuperarInt("txtEdad");
  if (edadPersona >= 0 && edadPersona <= 100) {
    valido = true;
  } else {
    valido = false;
    mostrarTexto("lblErrorEdad", "Debe estar entre 0 y 100");
  }
  if (valido) {
    let persona = {};
    persona.nombre = nombrePersona;
    persona.edad = edadPersona;
    personas.push(persona);

    alert("PERSONA AGREGADA CORRECTAMENTE");
    mostrarTabla();
  }
};
mostrarTabla = function () {
  let tabla;
  tabla = "<table>";
  tabla += "<tr><th>Nombre</th><th>Edad</th></tr>";
  for (let i = 0; i < personas.length; i++) {
    tabla +=
      "<tr><td>" +
      personas[i].nombre +
      "</td><td>" +
      personas[i].edad +
      "</td></tr>";
  }
  tabla += "</table>";
  document.getElementById("tablaPersonas").innerHTML = tabla;
};
encontrarMayor = function () {
  let personaMayor;
  if (personas.length > 0) {
    personaMayor = personas[0];
  }
  for (let i = 1; i < personas.length; i++) {
    let elementoPersona = personas[i];
    console.log(
      "Nombre: " + elementoPersona.nombre + " Edad: " + elementoPersona.edad
    );
    if (elementoPersona.edad > personaMayor.edad) {
      personaMayor = elementoPersona;
    }
  }
  let mayor = personaMayor;
  mostrarTexto("infoMayor", "Nombre: " + mayor.nombre + " Edad: " + mayor.edad);
  return personaMayor;
};

encontrarMenor = function () {
  let personaMenor;
  if (personas.length > 0) {
    personaMenor = personas[0];
  }
  for (let i = 1; i < personas.length; i++) {
    let elementoPersona = personas[i];
    console.log(
      "Nombre: " + elementoPersona.nombre + " Edad: " + elementoPersona.edad
    );
    if (elementoPersona.edad < personaMenor.edad) {
      personaMenor = elementoPersona;
    }
  }
  let menor = personaMenor;
  mostrarTexto("infoMenor", "Nombre: " + menor.nombre + " Edad: " + menor.edad);
  return personaMenor;
};

determinarMayor = function () {
  encontrarMayor();
};
determinarMenor = function () {
  encontrarMenor();
};

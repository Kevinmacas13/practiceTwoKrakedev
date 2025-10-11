ejecutarPrueba = function () {
  let mensaje;
  mensaje = recuperarTexto("txtCadena");
  console.log(recorrerCadena(mensaje));
};

ejecutarPrueba2 = function () {
  let mensaje;
  let invertido;
  mensaje = recuperarTexto("txtCadena");
  invertido = invertirCadena(mensaje);
  mostrarTexto("h3Resultado", invertido);
};
recorrerCadena = function (cadena) {
  for (let posicion = 0; posicion < cadena.length; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("   Caracter:" + caracter + " Posición: " + posicion);
  }
  for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("   CARACTER:" + caracter + " POSICION: " + posicion);
  }
};

invertirCadena = function (cadena) {
  let invertida = "";
  for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
    caracter = cadena.charAt(posicion);
    invertida = invertida + caracter;
  }
  return invertida;
};

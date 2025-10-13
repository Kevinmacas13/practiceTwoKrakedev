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

buscarLetra = function (cadena, letra) {
  let letraIterada;
  let existeLetra = false;
  for (let i = 0; i < cadena.length; i++) {
    letraIterada = cadena.charAt(i);
    if (letraIterada == letra) {
      existeLetra = true;
    }
  }
  if (existeLetra == true) {
    console.log("existe");
  } else {
    console.log("no existe");
  }
};

contarMayusculas = function (cadena) {
  let letra;
  let contadorMayusculas = 0;
  for (let i = 0; i < cadena.length; i++) {
    letra = cadena.charAt(i);
    if (esMayuscula(letra)) {
      contadorMayusculas++;
    }
  }
  console.log("Número de mayúsculas: " + contadorMayusculas);
};

esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};

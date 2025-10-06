obtenerAleatorio = () => {
  let aleatorio;
  let numeroMultiplicado;
  let numeroEntero;
  let valorDado;
  aleatorio = Math.random();
  numeroMultiplicado = aleatorio * 3;
  numeroEntero = parseInt(numeroMultiplicado);
  valorDado = numeroEntero + 1;
  return valorDado;
};


generarElemento = function () {
  let cadena1 = "piedra";
  let cadena2 = "papel";
  let cadena3 = "tijera";
  let numeroAleatorio = obtenerAleatorio();
  if (numeroAleatorio == 1) {
    return cadena1;
  } else if (numeroAleatorio == 2) {
    return cadena2;
  } else {
    return cadena3;
  }
};
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
  if (eleccionJugador1 == eleccionJugador2) {
    return 0;
  } else if (
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
    (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
  ) {
    return 1;
  } else if (
    (eleccionJugador2 == "piedra" && eleccionJugador1 == "tijera") ||
    (eleccionJugador2 == "papel" && eleccionJugador1 == "piedra") ||
    (eleccionJugador2 == "tijera" && eleccionJugador1 == "papel")
  ) {
    return 2;
  }
};

generarRuta = function (nombre) {
  let ruta;
  ruta = "./imagenes/" + nombre + ".png";
  return ruta;
};

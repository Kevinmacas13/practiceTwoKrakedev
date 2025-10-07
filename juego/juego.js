puntosUsuario = 0;
puntosComputadora = 0;

jugar = function (seleccionado) {
  let elemento;
  let rutaImagen;
  let ganador;
  elemento = generarElemento();
  rutaImagen = generarRuta(elemento);
  console.log(rutaImagen);

  mostrarImagen("imgComputadora", rutaImagen);
  ganador = determinarGanador(seleccionado, elemento);
  if (ganador == 0) {
    mostrarTexto("lblResultado", "EMPATE");
  } else if (ganador == 1) {
    mostrarTexto("lblResultado", "GANASTE LA PARTIDA!!");
    puntosUsuario = puntosUsuario + 1;
  } else if (ganador == 2) {
    puntosComputadora = puntosComputadora + 1;
    mostrarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
  }
  if (puntosUsuario == 5) {
    mostrarTexto("lblFinal", "HAS GANADO EL JUEGO");
    puntosComputadora = 0;
    puntosUsuario = 0;
  } else if (puntosComputadora == 5) {
    puntosComputadora = 0;
    puntosUsuario = 0;
    mostrarTexto("lblFinal", "COMPUTADOR TE HA VENCIDO");
  }
  mostrarTexto("lblPuntajeUsuario", "puntos Usuario: " + puntosUsuario);
  mostrarTexto(
    "lblPuntajeComputadora",
    "puntos Computadora: " + puntosComputadora
  );
};
limpiar = function () {
  puntosUsuario = 0;
  puntosComputadora = 0;
  mostrarImagen("imgComputadora", "./imagenes/computadora.jpeg");
  mostrarTexto("lblResultado", "");
  mostrarTexto("lblFinal", "");
  mostrarTexto("lblPuntajeUsuario", "puntos Usuario: " + puntosUsuario);
  mostrarTexto(
    "lblPuntajeComputadora",
    "puntos Computadora: " + puntosComputadora
  );
};

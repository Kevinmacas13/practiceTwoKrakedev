jugar = function (seleccionado) {
  let elemento;
  let rutaImagen;
  let ganador;
  elemento = generarElemento();
  rutaImagen = generarRuta(elemento);
  mostrarImagen("imgComputadora", generarRuta(rutaImagen));
  ganador = determinarGanador(seleccionado, elemento);
  if (ganador == 0) {
    mostrarTexto("lblResultado", "EMPATE");
  } else if (ganador == 1) {
    mostrarTexto("lblResultado", "GANASTE LA PARTIDA!!");
  } else if (ganador == 2) {
    mostrarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
  }
};

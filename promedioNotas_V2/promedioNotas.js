calcularPromedioNotas = function () {
  let n1;
  let n2;
  let n3;
  let promedio;
  n1 = recuperarFloat("txtNota1");
  n2 = recuperarFloat("txtNota2");
  n3 = recuperarFloat("txtNota3");
  promedio = calcularPromedio(n1, n2, n3);
  mostrarTexto("lblPromedio", "El promedio es: " + promedio.toFixed(2));
  if (promedio < 5 && promedio > 0) {
    mostrarImagen("imgPromedio", "imagenes/noaprueba.gif");
    mostrarTexto("lblMensaje", "REPROBADO");
  } else if (promedio >= 5 && promedio <= 8) {
    mostrarImagen("imgPromedio", "imagenes/Buen_Trabajo.gif");
    mostrarTexto("lblMensaje", "BUEN TRABAJO");
  } else if (promedio > 8 && promedio <= 10) {
    mostrarImagen("imgPromedio", "imagenes/excelente.gif");
    mostrarTexto("lblMensaje", "EXCELENTE");
  } else {
    mostrarImagen("imgPromedio", "imagenes/error.gif");
    mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
  }
};

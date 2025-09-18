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
  if (promedio > 7) {
    mostrarImagen("imgPromedio", "imagenes/aprueba.gif");
  } else {
    mostrarImagen("imgPromedio", "imagenes/noaprueba.gif");
  }
};

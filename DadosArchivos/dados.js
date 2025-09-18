jugar = function () {
  let aleatorio;
  aleatorio = lanzaDado();
  cambiarTexto("lblNumero", aleatorio);
  if (aleatorio > 3) {
    cambiarTexto("lblResultado", "ES MAYOR A 3\n GANASTE");
    console.log("ES MAYOR A 3");
    console.log("GANASTE");
  } else {
    cambiarTexto("lblResultado", "ES MENOR A 3\n PERDISTE");
  }
};

//Crea una función lanza dado
lanzaDado = function () {
  let aleatorio;
  let numeroMultiplicado;
  let numeroEntero;
  let valorDado;
  aleatorio = Math.random(); //entre 0 y 1
  numeroMultiplicado = aleatorio * 6;
  numeroEntero = parseInt(aleatorio * 6); //entre 0 y 5
  valorDado = numeroEntero + 1; //entre 1 y 6
  return valorDado;
};

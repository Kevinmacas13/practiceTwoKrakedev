generarAleatorio = function () {
  let aleatorios = [];
  let cmpNumero;
  let variable;
  cmpNumero = recuperarInt("txtNumero");
  if (validarNumero(cmpNumero)) {
    for (let i = 0; i < cmpNumero; i++) {
      console.log(i);
      variable = aleatorio();
      aleatorios.push(variable);
    }
    mostrarResultados(aleatorios);
  }
};

mostrarResultados = function (arregloNumeros) {
  let cmpTabla = document.getElementById("divResultados");
  let contenidoTabla = "<table>";
  contenidoTabla += "<tr><th>Número</th></tr>";
  for (let i = 0; i < arregloNumeros.length; i++) {
    contenidoTabla += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};

aleatorio = function () {
  let aleatorio;
  let numeroMultiplicado;
  let numeroEntero;
  let numAleatorio;
  aleatorio = Math.random();

  numeroMultiplicado = aleatorio * 100;
  numeroEntero = parseInt(numeroMultiplicado);
  numAleatorio = numeroEntero + 1;
  return numAleatorio;
};

validarNumero = function (numero) {
  if (numero >= 5 && numero <= 20) {
    return true;
  } else {
    return false;
  }
};

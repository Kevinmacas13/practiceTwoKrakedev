let notas = [];
agregarElementos = function () {
  notas.push(3);
  notas.push(5);

  console.log(notas);
};

recorrerArreglo = function () {
  let notaR;
  for (let indice = 0; indice < notas.length; indice++) {
    notaR = notas[indice];
    console.log(notaR);
  }
};
probarAgregar = function () {
  let notaRecuperada;
  notaRecuperada = recuperarInt("txtNota");
  agregarNota(notaRecuperada);
  console.log(notas);
};

agregarNota = function (nota) {
  notas.push(nota);
  mostrarNotas();
};
calcularPromedio = function () {
  let sumaNotas = 0;
  let promedio;
  for (let i = 0; i < notas.length; i++) {
    sumaNotas = sumaNotas + notas[i];
  }
  promedio = sumaNotas / notas.length;
  return promedio;
};
generarTabla = function () {
  let contenidoTabla = "";
  let cmpTabla = document.getElementById("divTabla");
  contenidoTabla +=
    "<table><tr><td>Uno</td></tr>" +
    "<tr><td>Dos</td></tr>" +
    "<tr><td>Tres</td></tr>" +
    "</table";
  cmpTabla.innerHTML = contenidoTabla;
};
ejecutarPromedio = function () {
  let promedio;
  promedio = calcularPromedio();
  mostrarTexto("lblPromedio", "El promedio es: " + promedio.toFixed(2));
};

mostrarNotas = function () {
  let cmpTabla = document.getElementById("divTabla");
  let contenidoTabla = "<table>";
  contenidoTabla += "<tr><th>Nota</th></tr>";
  let miNota;
  for (let i = 0; i < notas.length; i++) {
    miNota = notas[i];
    contenidoTabla += "<tr><td>" + miNota + "</td></tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};

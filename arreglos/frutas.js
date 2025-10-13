let frutas = ["pera", "manzana", "uva", "banana"];
probarBusqueda = function () {
  let frutaIngresada;
  let resultado;
  frutaIngresada = recuperarTexto("lblFruta");
  resultado = buscar(frutaIngresada);
  if (resultado == null) {
    alert("No existe la fruta");
  } else {
    alert(frutaIngresada + " existe la fruta");
  }
};
buscar = function (fruta) {
  let elemento;
  let frutaEncontrada = null;
  for (let i = 0; i < frutas.length; i++) {
    elemento = frutas[i];
    if (fruta == elemento) {
      frutaEncontrada = elemento;
      break;
    }
  }
  return frutaEncontrada;
};
array = [3, 4, 5, 6];
ultimo = array.length;

console.log("el ultimo es"+array[ultimo]);

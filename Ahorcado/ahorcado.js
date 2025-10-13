//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};
let palabraSecreta;
guardarPalabra = function () {
  let palabra;
  palabra = recuperarTexto("txtSecreta");
  if (palabra.length == 5) {
    let esValida = true;
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra.charAt(i);
      if (esMayuscula(letra) == false) {
        esValida = false;
      }
    }
    if (esValida == true) {
      palabraSecreta = palabra;
      console.log(palabraSecreta);
    }
  } else {
    alert("La palabra debe tener 5 letras mayúsculas");
  }
};

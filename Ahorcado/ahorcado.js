//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
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

mostrarLetra = function (letra, posicion) {
  if (posicion == 0) {
    mostrarTexto("div0", letra);
  }
  if (posicion == 1) {
    mostrarTexto("div1", letra);
  }
  if (posicion == 2) {
    mostrarTexto("div2", letra);
  }
  if (posicion == 3) {
    mostrarTexto("div3", letra);
  }
  if (posicion == 4) {
    mostrarTexto("div4", letra);
  }
};

validar = function (letra) {
  let letrasEncontradas = 0;
  for (let i = 0; i < palabraSecreta.length; i++) {
    let letraIterada = palabraSecreta.charAt(i);
    if (letraIterada == letra) {
      mostrarLetra(letra, i);
      letrasEncontradas++;
      coincidencias++;
    }
  }
  if (letrasEncontradas == 0) {
    alert("LA LETRA NO ES PARTE DE LA PALABRA");
    errores++;
    mostrarAhorcado();
  }
};

ingresarLetra = function () {
  let letra;
  letra = recuperarTexto("txtLetra");
  if (esMayuscula(letra)) {
    validar(letra);
    if (coincidencias == 5) {
      alert("FELICIDADES, GANASTE");
    }
    if (intentos == 10) {
      alert("HA PERDIDIO");
    }
  } else {
    alert("SOLO SE ACEPTAN LETRAS MAYÚSCULAS");
  }
  intentos++;
};

mostrarAhorcado = function () {
  if (errores == 1) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
  } else if (errores == 2) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
  } else if (errores == 3) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
  } else if (errores == 4) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
  } else if (errores == 5) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
  } else if (errores == 6) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
  } else if (errores == 7) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
  } else if (errores == 8) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
  } else if (errores == 9) {
    mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
  }
};

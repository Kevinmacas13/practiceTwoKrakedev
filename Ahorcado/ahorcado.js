//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;        
  } else {
    return false;
  }
};
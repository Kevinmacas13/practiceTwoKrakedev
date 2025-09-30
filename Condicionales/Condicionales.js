 calcularTasaInteres = function (ingreso) {
  if (ingreso < 300000) {
    return 0.16;
  } else if (ingreso >= 300000 && ingreso < 500000) {
    return 0.15;
  } else if (ingreso >= 500000 && ingreso < 1000000) {
    return 0.14;
  } else if (ingreso >= 1000000 && ingreso < 2000000) {
    return 0.13;
  } else if (ingreso >= 2000000) {
    return 0.12;
  }
};

calcularCapacidadPago = function (edad, ingresos, egresos) {
  if (edad > 50) {
    return (ingresos - egresos) * 0.3;
  } else if (edad <= 50) {
    return (ingresos - egresos) * 0.4;
  }
};

calcularDescuento = function (precio, cantidad) {
  if (cantidad < 3) {
    return precio;
  } else if (cantidad >= 3 && cantidad <= 5) {
    return precio * (1 - 0.02);
  } else if (cantidad >= 6 && cantidad <= 11) {
    return precio * (1 - 0.03);
  } else if (cantidad >= 12) {
    return precio * (1 - 0.04);
  }
};
determinarColesterolILDL = function (colesterol) {
 if (colesterol < 110 ) {
    return "Su nivel de colestero es LDL";
  } else if ( colesterol>=110 && colesterol< 120) {
    return "Su nivel de colesterol es No-HDL";
  } else if ( colesterol>=120 && colesterol<170) {
      return "Su nivel de colesterol es Colesterol total";
  }
};

validarClave = function (clave) {
  if (clave.length < 8 && clave.length >= 16) {
    return true;
  } else {
    return false;
  }
};

esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};

esMinuscula = function (letra) {
  if (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) {
    return true;
  } else {
    return false;
  }
};

esDigito = function (letra) {
  if (letra.charCodeAt(0) >= 48 && letra.charCodeAt(0) <= 57) {
    return true;
  } else {
    return false;
  }
};

darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    return true;
  } else {
    return false;
  }
};

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || (notaFisica > 90 && notaGeometria > 80)) {
    return true;
  } else {
    return false;
  }
};
dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
  if (
    notaMatematica > 90 ||
    notaFisica > 90 ||
    (notaGeometria > 90 && notaFisica > notaMatematica)
  ) {
    return true;
  } else {
    return false;
  }
};




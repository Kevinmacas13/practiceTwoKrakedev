const validarEstructura = function (placa) {
  let error1 = "La placa debe tener 7 u 8 caracteres";
  let error2 = "El primer caracter debe ser una letra mayuscula";
  let error3 = "el segundo caracter debe ser una letra mayuscula";
  let error4 = "el tercer caracter debe ser una letra mayuscula";
  let error5 = "el cuarto caracter debe ser un guion";
  let error6 = "el quinto caracter debe ser un digito";
  let error7 = "el sexto caracter debe ser un digito";
  let error8 = "el septimo caracter debe ser un digito";
  let error9 = "el octavo caracter debe ser un digito";
  let errores = "";
  if (placa.length == 7 || placa.length == 8) {
    errores = esMayuscula(placa.charAt(0)) ? (error2 = "") : error2;
    errores = esMayuscula(placa.charAt(1))
      ? errores + (error3 = "")
      : errores + ", " + error3;
    errores = esMayuscula(placa.charAt(2))
      ? errores + (error4 = "")
      : errores + ", " + error4;
    errores = esGuion(placa.charAt(3))
      ? errores + (error5 = "")
      : errores + ", " + error5;
    errores = esDigito(placa.charAt(4))
      ? errores + (error6 = "")
      : errores + ", " + error6;
    errores = esDigito(placa.charAt(5))
      ? errores + (error7 = "")
      : errores + ", " + error7;
    errores = esDigito(placa.charAt(6))
      ? errores + (error8 = "")
      : errores + ", " + error8;
    if (placa.length == 8) {
      errores = esDigito(placa.charAt(7))
        ? errores + (error9 = "")
        : errores + ", " + error9;
    }
    if (errores) {
      return errores;
    } else {
      return null;
    }
  } else {
    return "La placa debe tener 7 u 8 caracteres";
  }
};

obtenerProvincia = function (placa) {
  let provincia = placa.charAt(0);
  if (provincia == "A") {
    return "Azuay";
  } else if (provincia == "B") {
    return "Bolívar";
  } else if (provincia == "U") {
    return "Cañar";
  } else if (provincia == "C") {
    return "Carchi";
  } else if (provincia == "X") {
    return "Cotopaxi";
  } else if (provincia == "H") {
    return "Chimborazo";
  } else if (provincia == "O") {
    return "El Oro";
  } else if (provincia == "E") {
    return "Esmeraldas";
  } else if (provincia == "W") {
    return "Galápagos";
  } else if (provincia == "G") {
    return "Guayas";
  } else if (provincia == "I") {
    return "Imbabura";
  } else if (provincia == "L") {
    return "Loja";
  } else if (provincia == "R") {
    return "Los Ríos";
  } else if (provincia == "M") {
    return "Manabí";
  } else if (provincia == "V") {
    return "Morona Santiago";
  } else if (provincia == "N") {
    return "Napo";
  } else if (provincia == "S") {
    return "Pastaza";
  } else if (provincia == "P") {
    return "Pichincha";
  } else if (provincia == "K") {
    return "Sucumbíos";
  } else if (provincia == "Q") {
    return "Orellana";
  } else if (provincia == "T") {
    return "Tungurahua";
  } else if (provincia == "Z") {
    return "Zamora Chinchipe";
  } else if (provincia == "Y") {
    return "Santa Elena";
  } else {
    return null;
  }
};

obtenerTipoVehiculo = function (placa) {
  let tipo = placa.charAt(1);
  if (tipo == "A" || tipo == "Z") {
    return "Vehículo Comercial";
  } else if (tipo == "E") {
    return "Vehículo gubernamental";
  } else if (tipo == "X") {
    return "Vehículo de uso oficial";
  } else if (tipo == "S") {
    return "Vehículo del gobierno provincial";
  } else if (tipo == "M") {
    return "Vehículos municipales";
  } else {
    return "Vehículo particular";
  }
};

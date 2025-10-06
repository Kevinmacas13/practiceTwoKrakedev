validarPlaca = () => {
  let txtPlaca;
  let erroresEstructura;
  let lblResultado;
  let lblError;
  let diaPicoyPlaca;
  lblResultado = document.getElementById("lblResultado");
  lblError = document.getElementById("lblError");
  lblProvincia = document.getElementById("lblProvincia");
  lblTipoVehiculo = document.getElementById("lblTipoVehiculo");
  txtPlaca = document.getElementById("txtPlaca").value;
  erroresEstructura = validarEstructura(txtPlaca);
  if (erroresEstructura) {
    lblResultado.innerHTML = "La placa no es valida";
    lblError.innerHTML = erroresEstructura;
    lblProvincia.innerHTML = "";
    lblTipoVehiculo.innerHTML = "";
  } else {
    let provincia;
    let tipoVehiculo;
    tipoVehiculo = obtenerTipoVehiculo(txtPlaca);
    provincia = obtenerProvincia(txtPlaca);
    lblResultado.innerHTML = "La placa es valida";
    lblError.innerHTML = "";
    if (provincia) {
      lblProvincia.innerHTML = "Provincia: " + provincia;
    } else {
      lblProvincia.innerHTML = "Provincia es incorrecta";
    }
    if (tipoVehiculo) {
      lblTipoVehiculo.innerHTML = "Tipo de vehiculo: " + tipoVehiculo;
    } else {
      lblTipoVehiculo.innerHTML = "Vehiculo  incorrecto";
    }
    diaPicoyPlaca = obtenerDiaPicoyPlaca(txtPlaca);
    lblPicoyPlaca.innerHTML = "El dia de pico y placa es: " + diaPicoyPlaca;
  }
};
limpiar = () => {
  document.getElementById("txtPlaca").value = "";
  document.getElementById("lblResultado").innerHTML = "";
  document.getElementById("lblError").innerHTML = "";
  document.getElementById("lblProvincia").innerHTML = "";
  document.getElementById("lblTipoVehiculo").innerHTML = "";
  document.getElementById("lblPicoyPlaca").innerHTML = "";
};

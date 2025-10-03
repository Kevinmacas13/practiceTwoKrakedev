validarPlaca = () => {
  let txtPlaca;
  let erroresEstructura;
  let lblResultado;
  let lblError;
  lblResultado = document.getElementById("lblResultado");
  lblError = document.getElementById("lblError");
  lblProvincia = document.getElementById("lblProvincia");
  lblTipoVehiculo = document.getElementById("lblTipoVehiculo");
  txtPlaca = document.getElementById("txtPlaca").value;
  erroresEstructura = validarEstructura(txtPlaca);
  if (erroresEstructura) {
    lblResultado.innerHTML = "La placa no es valida";
    lblError.innerHTML = erroresEstructura;
  } else {
    let provincia;
    provincia = obtenerProvincia(txtPlaca);
    if (provincia) {
      lblProvincia.innerHTML = "Provincia: " + provincia;
    }
    lblResultado.innerHTML = "La placa es valida";
    lblError.innerHTML = "";
  }
};

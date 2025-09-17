calcularValorDescuento = function (monto, porcentajeDescuento) {
  let valorDescuento;
  valorDescuento = (monto * porcentajeDescuento) / 100;
  return valorDescuento;
};


calcularIva = function (monto) {
  let iva;
  iva = monto * 0.12; 
  return iva;
};


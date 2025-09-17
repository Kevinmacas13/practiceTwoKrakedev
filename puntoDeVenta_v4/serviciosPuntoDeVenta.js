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

calcularIva = function (monto) {
  let iva;
  iva = monto * 0.12; // Asumiendo un IVA del 12%
  return iva;
};

calcularSubtotal = function (precio, cantidad) {
  let subtotal;
  subtotal = precio * cantidad;
  return subtotal;
};

calcularTotal = function (subtotal, descuento, iva) {
  let total;
  total = subtotal - descuento + iva;
  return total;
}
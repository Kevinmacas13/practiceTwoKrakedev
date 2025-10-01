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
};

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let descuento;
  if (cantidad < 3) {
    descuento = 0;
  } else if (cantidad >= 3 && cantidad <= 5) {
    descuento = subtotal * 0.03;
  } else if (cantidad >= 6 && cantidad <= 11) {
    descuento = subtotal * 0.04;
  } else if (cantidad >= 12) {
    descuento = subtotal * 0.05;
  }
  return descuento;
};
console.log(calcularDescuentoPorVolumen(200,12));

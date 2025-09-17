calcularValorTotal = function () {
  //variables para recuperar los valores de las cajas de texto
  let nombreProducto;
  let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
  let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
  let porcentajeDescuento;

  //variables para almacenar los retornos de las funciones
  let valorSubtotal;
  let valorDescuento;
  let valorIVA;
  let valorTotal;

  //1. Recuperar el nombre del producto como String
  let cmpNombreProducto = recuperarTexto("txtProducto");
  //2. Recuperar el precio como float
  let cmpPrecioProducto = recuperarFloat("txtPrecio");
  //3. Recuperar cantidad como int
  let cmpCantidad = recuperarInt("txtCantidad");
  //4. Recuperar el porcentaje de descuento como int
  let cmpPorcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

  //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
  valorSubtotal = calcularSubtotal(cmpPrecioProducto, cmpCantidad);
  // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
  // los parametros cuando invoca la funcion.
  //5. Mostrar valorSubtotal en el componente lblSubtotal
  mostrarTexto("lblSubtotal", valorSubtotal.toFixed(3));
  // Utilizar mostrarTexto
  /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
  //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
  valorDescuento = calcularValorDescuento(
    valorSubtotal,
    cmpPorcentajeDescuento
  );

  //7. Mostrar el resultado en el componente lblDescuento
  mostrarTexto("lblDescuento", valorDescuento.toFixed(3));
  /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
  //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
  valorIVA = calcularIva(valorSubtotal - valorDescuento);
  // El IVA debe calcularse sobre el valor del subtotal menos el descuento

  //9. Mostrar el resultado en el componente lblValorIVA\
  mostrarTexto("lblValorIVA", valorIVA.toFixed(3));
  /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
  //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
  valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
  //11. Mostrar el resultado en el componente lblTotal
  mostrarTexto("lblTotal", valorTotal.toFixed(3));
  /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10
                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */

  //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
  let cmpResumen = document.getElementById("lblResumen");
  cmpResumen.innerText = `Valor a pagar por ${cmpCantidad} ${cmpNombreProducto} con ${cmpPorcentajeDescuento}% de descuento: USD ${valorTotal.toFixed(
    2
  )}`;

  /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
};
limpiar = function () {
  mostrarTextoEnCaja("txtProducto", "");
  mostrarTextoEnCaja("txtPrecio", "");
  mostrarTextoEnCaja("txtCantidad", "");
  mostrarTextoEnCaja("txtPorcentajeDescuento", "");
  mostrarTexto("lblSubtotal", "");
  mostrarTexto("lblDescuento", "");
  mostrarTexto("lblValorIVA", "");
  mostrarTexto("lblTotal", "");
  mostrarTexto("lblResumen", "");

  /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
};
/* SI TODO FUNCIONA, HACER UN PUSH */

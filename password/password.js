ejecutarValidacion = () => {
  let password = recuperarTexto("txtPassword");
  let mensaje = validarPassword(password);
  if (mensaje) {
    mostrarTexto("h3Resultado", mensaje);
  } else {
    mostrarTexto("h3Resultado", "Password correcto");
  }
};

validarPassword = (password) => {
  let mensajeError = "";
  if (password.length < 8) {
    mensajeError = "La contraseña debe tener al menos 8 caracteres.\n";
  }

  if (password.length > 16) {
    mensajeError =
      mensajeError + "La contraseña no debe tener más de 16 caracteres.\n";
  }
  let tieneMayuscula = false;
  for (let i = 0; i < password.length; i++) {
    const letra = password.charAt(i);
    if (esMayuscula(letra)) {
      tieneMayuscula = true;
    }
  }

  if (tieneMayuscula == false) {
    mensajeError =
      mensajeError + "La contraseña debe tener al menos una letra mayúscula.\n";
  }

  let tieneDigito = false;
  for (let i = 0; i < password.length; i++) {
    const letra = password.charAt(i);
    if (esDigito(letra)) {
      tieneDigito = true;
    }
  }
  if (tieneDigito == false) {
    mensajeError =
      mensajeError + "La contraseña debe tener al menos un dígito.\n";
  }
  let tieneCaracterEspecial = false;
  for (let i = 0; i < password.length; i++) {
    const letra = password.charAt(i);
    if (esCaracterEspecial(letra)) {
      tieneCaracterEspecial = true;
    }
  }
  if (tieneCaracterEspecial == false) {
    mensajeError =
      mensajeError +
      "La contraseña debe tener al menos un caracter especial (*, -, _).\n";
  }

  return mensajeError;
};

esMayuscula = function (letra) {
  if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
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
esCaracterEspecial = function (letra) {
  if (
    letra.charCodeAt(0) == 42 ||
    letra.charCodeAt(0) == 45 ||
    letra.charCodeAt(0) == 95
  ) {
    return true;
  } else {
    return false;
  }
};

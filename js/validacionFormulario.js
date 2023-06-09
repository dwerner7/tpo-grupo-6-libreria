function validarFormularioContacto() {
  // Obtener los valores ingresados por el usuario y recortar los posibles espacios en blanco al principio y al final.
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fecha = document.getElementById("fechaNac").value.trim();

  const titulo = document.getElementById("titulo").value.trim();
  const autor = document.getElementById("autor").value.trim();
  const editorial = document.getElementById("editorial").value.trim();

  // Verificar si algún campo está en blanco
  if (nombre === "" || email === "" || telefono === "" || fecha === "" || titulo === "" || autor === "" || editorial === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }


  // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
  for (let i = 0; i < nombre.length; i++) {
    let charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  if (nombre.length > 30) {
    alert("El nombre ingresado es muy largo");
    return false
  }
  

  //Verificar que la fecha sea mayor al año 1910 y menor al año 2010
  const anio = fecha[0] + fecha[1] + fecha[2] + fecha[3];
  if (anio < 1910 || anio > 2010) {
    alert("Ingrese una fecha válida");
    return false;
  }

  //el libro puede contener caracteres alfanumericos asi que no lo valido

  // Verificar si el autor contiene solo caracteres alfabéticos y espacios
  for (let i = 0; i < autor.length; i++) {
    let charCode = autor.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'autor' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  // Verificar si la editorial contiene solo caracteres alfabéticos y espacios
  for (let i = 0; i < editorial.length; i++) {
    let charCode = editorial.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'editorial' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  // Verificar si el telefono contiene solo 10 dígitos numéricos
  if (telefono.length !== 10) {
    alert("El campo 'telefono' debe contener exactamente 10 dígitos numéricos.");
    return false;
  }
  for (let j = 0; j < telefono.length; j++) {
    let digit = telefono.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  //Validar radio
  const consulta = document.getElementsByName("consulta");
  if (consulta[0].checked == true ||
    consulta[1].checked == true ||
    consulta[2].checked == true) {
  } else {  //Si ninguno está marcado....
    alert("Seleccione el tipo de consulta que desea realizar");
    return false
  }

  // Si todas las validaciones son exitosas, enviar el formulario
  alert("Formulario enviado correctamente.");
  return true;

}


function validarFormularioNewsletter(){
  const emailNewslettter = document.getElementById("email-newsletter").value.trim();

  // Verificar si el campo está en blanco
  if (emailNewslettter === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
}

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}


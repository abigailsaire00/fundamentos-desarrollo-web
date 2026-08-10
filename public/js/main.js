const formulario = document.getElementById("formulario")

// NOMBRE 

const nombre = document.getElementById("nombre")
const error_nombre = document.getElementById("error-nombre")

//VALIDACIONES

const validaciones = {
    "nombre": {
        "regla": /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/,
        "mensaje": "El nombre es invalido, solo puede contener letras",
        "es_valido": false

    }, 
    "correo": {
        "regla": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "mensaje": "Ingresa un correo electrónico válido",
        "es_valido": false


    }
}

// CORREO
const correo = document.getElementById("correo")
const error_correo = document.getElementById("error-correo")

// VALIDACION NOMBRE

formulario.addEventListener("submit", (event) => {
   event.preventDefault()

   if (validaciones["nombre"].regla.test(nombre.value)) {
    validaciones ["nombre"].es_valido = true
    error_correo.innerText = ""

   } else {
    validaciones ["nombre"].es_valido = false
    error_nombre.innerText = validaciones ["nombre"].mensaje
   }

   // VALIDACION CORREO

   if (validaciones["correo"].regla.test(correo.value)) {
    validaciones ["correo"].es_valido = true
    error_correo.innerText = ""

   } else {
    validaciones ["correo"].es_valido = false
    error_correo.innerText = validaciones ["correo"].mensaje
   }



   //console.log(nombre.value)
  //console.log(correo.value)

})

  
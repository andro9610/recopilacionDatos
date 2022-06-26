import {Habitante} from "./Objetos/habitante.js";

function cargarListeners(){
    let botonContinuar = document.getElementById("botonContinuar");
    botonContinuar.addEventListener("click", goToMascota);

    let botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.addEventListener("click", recogerDatosHabitante);
}

function limpiarCampos(){
    document.getElementById("tipoDocumento").value = "CC";
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("genero").value = "Masculino";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("gradoEscolaridad").value = "Ninguno";
    document.getElementById("estudiosEnCurso").value = "";
    document.getElementById("discapacidad").value = "";
    document.getElementById("tipoPropiedad").value = "Residente";
    document.getElementById("fechaInicioResidencia").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
}

function recogerDatosHabitante(){
    let habitante = new Habitante();
    limpiarCampos();
    alert("¡Habitante registrado!");
    /**Insertar direccion de la casa en SQL*/
}

function goToMascota(){
    recogerDatosHabitante();
    window.location.href = "./mascota.html";
}

window.onload = cargarListeners;
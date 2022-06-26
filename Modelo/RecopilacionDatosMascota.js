import {Mascota} from "./Objetos/mascota.js";

function cargarListeners(){
    let botonContinuar = document.getElementById("botonContinuar");
    botonContinuar.addEventListener("click", goToVehiculo);

    let botonNinguno = document.getElementById("botonNinguno");
    botonNinguno.addEventListener("click", goToVehiculoVacio);

    let botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.addEventListener("click", recogerDatosMascota);
}

function recogerDatosMascota(){
    let mascota = new Mascota();
    alert("¡Mascota registrada!");
    limpiarCampos();

    /**Insertar datos de la mascota en SQL*/
}

function limpiarCampos(){
    document.getElementById("tipoMascota").value = "Ninguno";
    document.getElementById("esterilizacion").checked = false;
    document.getElementById("vacunaRabia").checked = false;
}

function goToVehiculo(){
    recogerDatosMascota();
    window.location.href = "./vehiculo.html";
}

function goToVehiculoVacio(){
    window.location.href = "./vehiculo.html";
}

window.onload = cargarListeners;
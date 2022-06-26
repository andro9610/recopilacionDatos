import {Vehiculo} from "./Objetos/vehiculo.js";

function cargarListeners(){
    let botonContinuar = document.getElementById("botonContinuar");
    botonContinuar.addEventListener("click", goToPantallaFinal);

    let botonNinguno = document.getElementById("botonNinguno");
    botonNinguno.addEventListener("click", goToPantallaFinal_Vacio);

    let botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.addEventListener("click", recogerDatosVehiculo);
}

function recogerDatosVehiculo(){
    let vehiculo = new Vehiculo();
    limpiarCampos();
    /**Insertar datos de la mascota en SQL*/
}

function limpiarCampos(){
    document.getElementById("placa").value = "";
    document.getElementById("tipoVehiculo").value = "Ninguno";
}

function goToPantallaFinal(){
    recogerDatosVehiculo();
    window.location.href = "./index.html";
}

function goToPantallaFinal_Vacio(){
    window.location.href = "./index.html";
}

window.onload = cargarListeners;
import {Casa} from "./Objetos/casa.js";

function cargarListeners(){
    let botonContinuar = document.getElementById("botonContinuar");
    botonContinuar.addEventListener("click", goToHabitante);
}

function recogerDatosCasa(){
    sessionStorage.setItem("Casa",new Casa().direccion);
    alert("¡Casa registrada!");
    /**Insertar direccion de la casa en SQL*/ 
}

function goToHabitante(){
    recogerDatosCasa();
    window.location.href = "./habitante.html";
}

window.onload = cargarListeners;
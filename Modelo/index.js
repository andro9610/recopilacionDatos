window.onload = function(){
    let button = document.getElementById("botonIniciar");
    button.addEventListener("click", goToCasa);
}

function goToCasa(){
    location.href = "https://andro9610.github.io/recopilacionDatos/Controlador/casa.html";
}
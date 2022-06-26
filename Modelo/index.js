window.onload = function(){
    let button = document.getElementById("botonIniciar");
    button.addEventListener("click", goToCasa);
}

function goToCasa(){
    location.href = "./casa.html";
}
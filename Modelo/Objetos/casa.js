export class Casa{
    constructor(){
        this.direccion = "Calle "
        + document.getElementById("calle_Parte_A").value
        + document.getElementById("calle_Parte_B").value
        + " # "
        + document.getElementById("calle_Parte_C").value
        + document.getElementById("calle_Parte_D").value
        + document.getElementById("calle_Parte_E").value;
    }
}
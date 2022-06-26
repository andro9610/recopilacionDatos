export class Habitante{
    constructor(){
        this.direccion = sessionStorage.getItem("Casa").valueOf();
        this.tipoDocumento = document.getElementById("tipoDocumento").value;
        this.numeroDocumento = document.getElementById("numeroDocumento").value;
        this.nombre = document.getElementById("nombre").value;
        this.apellido = document.getElementById("apellido").value;
        this.genero = document.getElementById("genero").value;
        this.fechaNacimiento = document.getElementById("fechaNacimiento").value;
        this.gradoEscolaridad = document.getElementById("gradoEscolaridad").value;
        this.estudiosEnCurso = document.getElementById("estudiosEnCurso").value;
        this.discapacidad = document.getElementById("discapacidad").value;

        this.tipoPropiedad = document.getElementById("tipoPropiedad").value;
        this.fechaInicioResidencia = document.getElementById("fechaInicioResidencia").value;

        this.email = document.getElementById("email").value;
        this.telefono = document.getElementById("telefono").value;
    }
}
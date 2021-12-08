// Variables para los datos del input
const pacientes = document.getElementById("paciente");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const telefono = document.getElementById("telefono");
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");
const objetivo = document.getElementById("objetivo");

let form = document.getElementById("nueva-cita");
let boton = document.getElementById("btn");
let contenedor = document.getElementById("cita");
let borrar = document.getElementById("eliminar");
const photo = {
  id: 1,
  imagen: "../images/crossfitcajon-min.jpg"
};

// Objeto de citas principal
class DatosCita {
  constructor(pacientes, apellido, edad, telefono, hora, fecha, objetivo) {
    this.pacientes = pacientes;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.fecha = fecha;
    this.hora = hora;
    this.objetivo = objetivo;
  }


}

const datosCita = new DatosCita();
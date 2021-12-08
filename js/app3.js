eventListeners();

function eventListeners() {
  // Evento de las propiedades de los objetos
  pacientes.addEventListener("change", citas);
  apellido.addEventListener("change", citas);
  edad.addEventListener("change", citas);
  telefono.addEventListener("change", citas);
  hora.addEventListener("change", citas);
  fecha.addEventListener("change", citas);
  objetivo.addEventListener("change", citas);
}

function citas(e) {
  datosCita[e.target.name] = e.target.value;
}

function imprimirCita() {
  // Crear div
  const divCita = document.createElement("div");
  divCita.classList.add("contenedor2");

  // Impresion de datos en pantalla
  const citaPacientes = document.createElement("p");
  citaPacientes.classList.add("pacientesCita");
  citaPacientes.textContent = `Nombre: ${pacientes.value} `;

  const citaApellido = document.createElement("p");
  citaApellido.classList.add("pacientesCita");
  citaApellido.textContent = `Apellido: ${apellido.value} `;

  const citaEdad = document.createElement("p");
  citaEdad.classList.add("pacientesCita");
  citaEdad.textContent = `Edad: ${edad.value} `;

  const citaTelefono = document.createElement("p");
  citaTelefono.classList.add("pacientesCita");
  citaTelefono.textContent = `Telefono: ${telefono.value} `;

  const citaFecha = document.createElement("p");
  citaFecha.classList.add("pacientesCita");
  citaFecha.textContent = `Fecha: ${fecha.value} `;

  const citaHora = document.createElement("p");
  citaHora.classList.add("pacientesCita");
  citaHora.textContent = `Hora: ${hora.value} `;

  const citaObjetivo = document.createElement("p");
  citaObjetivo.classList.add("pacientesCita");
  citaObjetivo.textContent = `Objetivos: ${objetivo.value} `;

  // Crear y agregar un boton Elimina

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn2");
  btnEliminar.innerHTML = "Eliminar";

  const btnImprimir = document.createElement("button");
  btnImprimir.classList.add("btn2");
  btnImprimir.innerHTML = "Imprimir Cita";

  //Agregar un evento para boton eliminar e imprimir datos

  btnEliminar.addEventListener("click", (e) => {
    e.target.parentNode.remove();

    //  Animacion de form cuando se oprima boton eliminar
    $("#contenido").fadeIn(500);

    $(`#div${photo.id}`).fadeIn(1000);
    $("#bbtn").fadeIn(800);
    $(".divClase").fadeOut(1000);
  });

  btnImprimir.addEventListener("click", (e) => {
    window.print("");
  });

  // Insertar botones y div en DOM

  divCita.appendChild(citaPacientes);
  divCita.appendChild(citaApellido);
  divCita.appendChild(citaEdad);
  divCita.appendChild(citaTelefono);
  divCita.appendChild(citaFecha);
  divCita.appendChild(citaHora);
  divCita.appendChild(citaObjetivo);

  divCita.appendChild(btnEliminar);
  divCita.appendChild(btnImprimir);
  // Agregar el div al contenedor del html
  contenedor.appendChild(divCita);
}

function localS() {
  // obtengo los datos del array del Local
  let almacenar = JSON.parse(localStorage.getItem("datosLocal")) || [];
  // Ingreso el nuevo dato al array
  almacenar.push(datosCita);
  // Ingreso los datos alLocalStore
  let local = JSON.stringify(almacenar);
  localStorage.setItem("datosLocal", local);
}
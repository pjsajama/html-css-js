
const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidadT = document.getElementById("cantidadT");
let categoriaT = document.getElementById("categoriaT");

function total_pagar() {

    let totalValor = (cantidadT.value) * valorTicket;

    if (categoriaT.value == 0) {
        totalValor = totalValor;
    }
    if (categoriaT.value == 1) {
        totalValor = totalValor - ((descuentoEstudiante / 100) * totalValor);
    }
    if (categoriaT.value == 2) {
        totalValor = totalValor - ((descuentoTrainee / 100) * totalValor);
    }
    if (categoriaT.value == 3) {
        totalValor = totalValor - ((descuentoJunior / 100) * totalValor);
    }
    totalPago.innerHTML = totalValor;

}

btnResumen.addEventListener("click", total_pagar);
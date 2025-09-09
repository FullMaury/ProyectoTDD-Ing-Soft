// src/estacionamiento.js

let horaIngreso;
let horaSalida;

function registrarHoraIngreso(hora) {
    horaIngreso = hora;
    return horaIngreso;
}

function registrarHoraSalida(hora) {
    if (hora < horaIngreso) {
        throw new Error('La hora de salida no puede ser anterior a la de ingreso');
    }
    horaSalida = hora;
    return horaSalida;
}

function calcularTarifaBase(horaIngreso, horaSalida) {
    // Calculamos la diferencia en milisegundos y luego convertimos a horas
    const diferenciaHoras = (horaSalida - horaIngreso) / 1000 / 60 / 60;
    // Redondeamos hacia arriba la diferencia de horas para tener una tarifa fraccionada
    return Math.ceil(diferenciaHoras) * 10;
}

module.exports = { registrarHoraIngreso, registrarHoraSalida, calcularTarifaBase };

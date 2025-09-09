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

module.exports = { registrarHoraIngreso, registrarHoraSalida };  // Exporta ambas funciones

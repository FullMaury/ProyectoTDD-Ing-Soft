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
    const diferenciaHoras = (horaSalida - horaIngreso) / 1000 / 60 / 60;
    return Math.ceil(diferenciaHoras) * 10;
}

function calcularTarifaNocturna(horaIngreso, horaSalida) {
    const tarifaNocturnaPorHora = 6;
    
    // Obtener las horas de ingreso y salida
    const horaIngresoNum = horaIngreso.getHours();
    const horaSalidaNum = horaSalida.getHours();
    
    // Verificamos si las horas están dentro del rango nocturno (22:00 a 06:00)
    const esNocturna = (horaIngresoNum >= 22 || horaSalidaNum <= 6);

    if (esNocturna) {
        // Calcular la diferencia de horas, similar a la tarifa base
        const diferenciaHoras = (horaSalida - horaIngreso) / 1000 / 60 / 60;
        return Math.ceil(diferenciaHoras) * tarifaNocturnaPorHora;
    } else {
        return 0; // Si no está en el horario nocturno, no aplica tarifa nocturna
    }
}

function calcularTopeMaximo(tarifa) {
    const TOPE_DIARIO = 50.00;
    if (tarifa > TOPE_DIARIO) {
        return TOPE_DIARIO;
    }
    return tarifa;
}

function calcularPenalidad(ticketPerdido, tarifa) {
    const PENALIDAD = 80.00;
    if (ticketPerdido) {
        return PENALIDAD;
    }
    return tarifa;
}



module.exports = { registrarHoraIngreso, registrarHoraSalida, calcularTarifaBase, calcularTarifaNocturna, calcularTopeMaximo, calcularPenalidad };

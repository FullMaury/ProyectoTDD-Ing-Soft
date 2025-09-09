const { registrarHoraIngreso } = require('../src/estacionamiento');
const { registrarHoraSalida } = require('../src/estacionamiento');
const { calcularTarifaBase } = require('../src/estacionamiento');
const { calcularTarifaNocturna } = require('../src/estacionamiento');
const { calcularTopeMaximo } = require('../src/estacionamiento'); // Aún no existe


test('Registrar la hora de ingreso', () => {
    const horaIngreso = new Date('2025-09-09T08:00:00');
    const resultado = registrarHoraIngreso(horaIngreso);
    expect(resultado).toEqual(horaIngreso);  
});

test('Registrar la hora de salida', () => {
    const horaIngreso = new Date('2025-09-09T08:00:00');
    const horaSalida = new Date('2025-09-09T10:30:00');
        registrarHoraIngreso(horaIngreso);  
        const resultado = registrarHoraSalida(horaSalida);  
    expect(resultado).toEqual(horaSalida);
});

test('Calcular tarifa base', () => {
    const horaIngreso = new Date('2025-09-09T08:00:00');
    const horaSalida = new Date('2025-09-09T10:30:00'); 
    registrarHoraIngreso(horaIngreso);
    registrarHoraSalida(horaSalida);
    const tarifaBase = calcularTarifaBase(horaIngreso, horaSalida);
    expect(tarifaBase).toBe(30.00); 
});

test('Calcular tarifa nocturna', () => {
    const horaIngreso = new Date('2025-09-09T23:00:00');
    const horaSalida = new Date('2025-09-10T01:30:00');
    registrarHoraIngreso(horaIngreso);
    registrarHoraSalida(horaSalida);
    const tarifaNocturna = calcularTarifaNocturna(horaIngreso, horaSalida);
    expect(tarifaNocturna).toBe(18.00);
});



test('Aplicar tope máximo por día', () => {
    const horaIngreso = new Date('2025-09-09T08:00:00');
    const horaSalida = new Date('2025-09-09T20:30:00'); // 12.5 horas
    registrarHoraIngreso(horaIngreso);
    registrarHoraSalida(horaSalida);

    const tarifaBase = calcularTarifaBase(horaIngreso, horaSalida); // 12.5h -> 13h -> 130 Bs
    const tarifaConTope = calcularTopeMaximo(tarifaBase);

    expect(tarifaConTope).toBe(50.00); // Tope máximo aplicado
});





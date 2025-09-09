const { registrarHoraIngreso } = require('../src/estacionamiento');

test('Registrar la hora de ingreso', () => {
    const horaIngreso = new Date('2025-09-09T08:00:00');
    const resultado = registrarHoraIngreso(horaIngreso);
    expect(resultado).toEqual(horaIngreso);  
});

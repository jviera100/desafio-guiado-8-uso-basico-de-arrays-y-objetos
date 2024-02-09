document.addEventListener('DOMContentLoaded', function() {
    // Datos de consultas desde Excel
    const consultas = [
        { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
        { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
        { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
        { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
        { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
    ];

    // Crear estructura de datos mediante arreglos y objetos
    const radiologia = [];
    const traumatologia = [];
    const dental = [];

    consultas.forEach(consulta => {
        switch (consulta.especialista) {
            case 'IGNACIO SCHULZ':
            case 'FERNANDO WURTHZ':
                traumatologia.push(consulta);
                break;
            case 'FEDERICO SUBERCASEAUX':
            case 'ANA MARIA GODOY':
                radiologia.push(consulta);
                break;
            case 'PATRICIA SUAZO':
                dental.push(consulta);
                break;
        }
    });

    // Función para obtener la primera y última atención de cada listado
    function obtenerPrimeraUltimaAtencion(consultas) {
        const primeraAtencion = consultas[0];
        const ultimaAtencion = consultas[consultas.length - 1];
        return `Primera atención: ${primeraAtencion.paciente} - ${primeraAtencion.prevision} | Última atención: ${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}.`;
    }

    // Mostrar por pantalla la primera y última atención de cada listado
    document.write('<p>Estadísticas centro médico Ñuñoa</p>');
    document.write('<h3>Radiología</h3>');
    document.write(obtenerPrimeraUltimaAtencion(radiologia));
    document.write('<h3>Traumatología</h3>');
    document.write(obtenerPrimeraUltimaAtencion(traumatologia));
    document.write('<h3>Dental</h3>');
    document.write(obtenerPrimeraUltimaAtencion(dental));

    // Recorrer el arreglo y mostrar su contenido en una tabla
    document.write('<h3>Tabla de Consultas</h3>');
    document.write('<table border="1"><tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>');
    consultas.forEach(consulta => {
        document.write(`<tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`);
    });
    document.write('</table>');
});

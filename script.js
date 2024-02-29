document.getElementById('parkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario de entrada
    var vehicleType = document.getElementById('vehicleType').value;
    var licensePlate = document.getElementById('licensePlate').value;
    var entryTime = new Date(); // Obtener la hora de entrada actual

    // Ocultar el formulario de entrada
    document.getElementById('parkingForm').style.display = 'none';

    // Mostrar el formulario de salida
    document.getElementById('exitForm').style.display = 'block';

    // Guardar valores en el formulario de salida para su posterior uso
    document.getElementById('exitLicensePlate').value = licensePlate;
    document.getElementById('entryTimeExit').value = entryTime.toLocaleTimeString(); // Mostrar la hora de entrada
});

document.getElementById('exitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario de salida
    var exitLicensePlate = document.getElementById('exitLicensePlate').value;
    var exitTime = new Date(); // Obtener la hora de salida actual

    // Obtener la hora de entrada almacenada en el formulario de entrada
    var entryTime = new Date(document.getElementById('entryTime').value);

    // Calcular el tiempo transcurrido en minutos
    var totalTime = Math.abs(exitTime - entryTime) / (1000 * 60); // Convertir milisegundos a minutos

    // Calcular el costo total
    var totalCost;
    if (totalTime <= 10) {
        totalCost = 0;
    } else if (totalTime <= 180) {
        totalCost = Math.ceil(totalTime / 60) * 2200; // Cobrar por hora
    } else {
        totalCost = 4000; // Tarifa plana después de 3 horas
    }

    // Convertir el tiempo transcurrido a horas y minutos
    var totalHours = Math.floor(totalTime / 60);
    var totalMinutes = Math.round(totalTime % 60);

    // Mostrar el resultado en el formulario de salida
    var outputMessage = 'Tiempo transcurrido: ' + totalHours + ' horas ' + totalMinutes + ' minutos<br>';
    outputMessage += 'Total a pagar: $' + totalCost;
    document.getElementById('output').innerHTML = outputMessage;

    // Mostrar nuevamente el formulario de entrada para permitir nuevos registros
    document.getElementById('parkingForm').style.display = 'block';

    // Ocultar el formulario de salida
    document.getElementById('exitForm').style.display = 'none';
});






document.getElementById('parkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario de entrada
    var vehicleType = document.getElementById('vehicleType').value;
    var licensePlate = document.getElementById('licensePlate').value;
    var entryTime = new Date(document.getElementById('entryTime').value);

    // Mostrar el historial de entrada
    var entryHistory = document.getElementById('entryHistory');
    var entryInfo = document.createElement('div');
    entryInfo.textContent = `Tipo de vehículo: ${vehicleType}, Numero de placa: ${licensePlate}, Hora de entrada: ${entryTime.toLocaleTimeString()}`;
    entryHistory.appendChild(entryInfo);

    // Ocultar el formulario de entrada y mostrar el formulario de salida
    document.getElementById('entryInfoContainer').style.display = 'none';
    document.getElementById('exitForm').style.display = 'block';
});

document.getElementById('exitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario de salida
    var exitLicensePlate = document.getElementById('exitLicensePlate').value;
    var exitTime = new Date(); // Obtener la hora de salida actual

    // Obtener la hora de entrada almacenada en el historial
    var entryInfo = document.getElementById('entryHistory').lastChild;
    var entryTime = new Date(entryInfo.textContent.match(/Hora de entrada: ([\d:]*)/)[1]);

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

    // Mostrar el resultado en el formulario de salida
    var output = document.getElementById('output');
    output.innerHTML = `Tiempo transcurrido: ${Math.floor(totalTime / 60)} horas ${Math.round(totalTime % 60)} minutos<br>Total a pagar: $${totalCost}`;

    // Mostrar el historial y ocultar el formulario de salida después de mostrar el resultado
    output.style.display = 'block';
    document.getElementById('entryHistory').style.display = 'none';
    document.getElementById('exitForm').style.display = 'none';
});













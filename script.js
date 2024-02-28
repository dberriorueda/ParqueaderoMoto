document.getElementById('parkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var vehicleType = document.getElementById('vehicleType').value;
    var licensePlate = document.getElementById('licensePlate').value;
    var entryTime = document.getElementById('entryTime').value;
    var exitTime = document.getElementById('exitTime').value;

    var entryHour = parseInt(entryTime.split(':')[0]);
    var entryMinute = parseInt(entryTime.split(':')[1]);

    var exitHour = parseInt(exitTime.split(':')[0]);
    var exitMinute = parseInt(exitTime.split(':')[1]);

    var totalMinutes = (exitHour * 60 + exitMinute) - (entryHour * 60 + entryMinute);
    var totalHours = Math.ceil(totalMinutes / 60);

    var totalCost;

    if (totalMinutes <= 10) {
        totalCost = 0;
    } else if (totalMinutes <= 180) { // Cambiado de totalHours a totalMinutes
        totalCost = totalHours * 2200;
    } else {
        totalCost = 4000;
    }

    var outputMessage = '<p>Numero de placa: ' + licensePlate + '</p>' +
                        '<p> Tipo de Vehiculo: '+ vehicleType + '</p>' +
                        '<p>Hora de entrada: ' + entryTime + '</p>' +
                        '<p> Hora de Salida: ' + exitTime + '</p>' +
                        '<p>Hora transcurridas: ' +totalHours + '</p>' + 
                        '<p>Total a pagar: $' + totalCost + '</p>';

    document.getElementById('output').innerHTML = outputMessage;
});

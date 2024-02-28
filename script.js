document.getElementById('parkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var vehicleType = document.getElementById('vehicleType').value;
    var entryTime = document.getElementById('entryTime').value;
    var exitTime = document.getElementById('exitTime').value;

    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var entryHour = parseInt(entryTime.split(':')[0]);
    var entryMinute = parseInt(entryTime.split(':')[1]);

    var exitHour = parseInt(entryTime.split(':')[0]);
    var exitMinute = parseInt(exitTime.split(':')[1]);

    var totalMinutes = (exitHour - entryHour) * 60 + (exitMinute - entryMinute);
    var totalHours = Math.ceil(totalMinutes / 60);

    var totalCost;

    if (totalMinutes <= 10) {
        totalCost = 0;
    } else if (totalMinutes <= 180) { // Cambiado de totalHours a totalMinutes
        totalCost = totalHours * 2200;
    } else {
        totalCost = 4000;
    }

    var outputMessage = '<p>Hora de entrada: ' + entryTime + '</p>' +
                        '<p> Hora de Salida: ' + exitTime + '</p>' +
                        '<p>Hora transcurridas: ' + Math.ceil(totalMinutes / 60) + '</p>' + 
                        '<p>Total a pagar: $' + totalCost + '</p>';

    document.getElementById('output').innerHTML = outputMessage;
});

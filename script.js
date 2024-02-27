document.getElementById('parkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var vehicleType = document.getElementById('vehicleType').value;
    var entryTime = document.getElementById('entryTime').value;

    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    var entryHour = parseInt(entryTime.split(':')[0]);
    var entryMinute = parseInt(entryTime.split(':')[1]);

    var totalMinutes = (currentHour - entryHour) * 60 + (currentMinute - entryMinute);

    var totalCost;

    if (totalMinutes <= 10) {
        totalCost = 0;
    } else if (totalMinutes <= 180) { // Cambiado de totalHours a totalMinutes
        totalCost = Math.ceil(totalMinutes / 60) * 2200;
    } else {
        totalCost = 4000;
    }

    var outputMessage = '<p>Hora de entrada: ' + entryTime + '</p>' +
                        '<p>Hora transcurridas: ' + Math.ceil(totalMinutes / 60) + '</p>' + 
                        '<p>Total a pagar: $' + totalCost + '</p>';

    document.getElementById('output').innerHTML = outputMessage;
});

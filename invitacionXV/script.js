let currentScreen = 1;

// Función para pasar a la siguiente pantalla
function nextScreen() {
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'flex';
    startCountdown();
}

// Función para confirmar asistencia
function confirmAttendance(response) {
    alert('Has elegido: ' + response);
}

// Función para iniciar la cuenta regresiva
function startCountdown() {
    const daysBox = document.getElementById('countdown-days');
    const hoursBox = document.getElementById('countdown-hours');
    const minutesBox = document.getElementById('countdown-minutes');
    const secondsBox = document.getElementById('countdown-seconds');
    const eventDate = new Date('2024-09-30T00:00:00'); // Fecha del evento

    const updateCountdown = () => {
        const now = new Date();
        const timeDiff = eventDate - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        daysBox.innerHTML = `${days}d`;
        hoursBox.innerHTML = `${hours}h`;
        minutesBox.innerHTML = `${minutes}m`;
        secondsBox.innerHTML = `${seconds}s`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Llamar una vez para inicializar
}

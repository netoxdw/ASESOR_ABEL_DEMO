// Configuración de la fecha objetivo para la cuenta regresiva
const countdownDate = new Date("Sep 23, 2024 23:59:59").getTime();

// Función para actualizar el cronómetro
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calcular el tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en los elementos correspondientes
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Oferta Expirada!";
    }
}

// Actualiza el cronómetro cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

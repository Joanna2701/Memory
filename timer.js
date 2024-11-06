let seconds = 0;
let timerInterval; // Intervales de secondes
let timerStarted = false; // Évite de relancer plusieurs fois

// Fonction qui démarre le timer
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++; // J'incrémente les secondes
        document.getElementById("timer").textContent = `Temps : ${seconds}s`;
    }, 1000);
}

// Fonction qui arrête le timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Gestion du clic pour démarrer le timer
document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.addEventListener("click", () => {
            console.log("Timer démarré !");
            if (!timerStarted) {
                startTimer();
                timerStarted = true;
                timerElement.style.cursor = "default";
            }
        });
    }
});

// Vérifie si le jeu est terminé
function checkGameEnd() {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cardsArray.length) {
        stopTimer();
        alert(`Félicitations ! Le jeu est terminé en ${seconds} secondes.`);
    }
}

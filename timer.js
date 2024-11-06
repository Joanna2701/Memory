let seconds = 0;
let timerInterval; // Intervales de secondes
let timerStarted = false; // Évite de relancer plusieurs fois





let timer = document.querySelector("#timer");



// Fonction qui démarre le timer
function startTimer() {
      timerInterval = setInterval(() => {
        seconds++; // J'incrémente les secondes
        timer.textContent = `Temps : ${seconds}s`;
    }, 1000);
}

startTimer();
// Fonction qui arrête le timer
function stopTimer() {
    clearInterval(timerInterval);
}


// Vérifie si le jeu est terminé
function checkGameEnd() {
    const matchedCards = document.querySelectorAll('#container_cards');
    if (matchedCards.length === cardsArray.length) {
        stopTimer();
        alert(`Félicitations ! Le jeu est terminé en ${seconds} secondes.`);
    }
}

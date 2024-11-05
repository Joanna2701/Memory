let seconds = 0;
let timerInterval;//intervales de secondes
let timerStarted = false; //évite de relancer plusieurs fois

// On démarre le timer

function startTimer(){ //ma fonction qui démarre le timer
    timerInterval = setInterval(() => {
        seconds++; //j'incrémente les secondes du coup ^^
        document.getElementById("timer?").textContent = `Temps : ${seconds}s`; //C'est quoi le nom de l'id dans le dom ?
    }, 1000);



}

// J'arrête le timer

function stopTimer(){ //ma fonction qui arrête le timer

    clearInterval(timerInterval); //j'efface le timer


    // Gestion du clic pour démarrer le timer

    const timerElement = document.getElementById("timer");
    timerElement.addEventListener("click", () => { //active le clic
        if (!timerStarted) { //Empêche de relancer le timer si démarrer
            startTimer();
            timerStarted = true; // Le définie sur démarrer
            timerElement.style.cursor = "default"; //change le curseur unefois démarrer
        }
    });


    //Verifier si le jeu est terminé

    function checkGameEnd() {

        const matchedCards = document.querySelectorAll('.matched');
        if (matchedCards.length === cardsArray.length) { 
            stopTimer();
            alert('Félicitation le jeu est terminé le noob en ${seconds} secondes.');
        }
    }



}


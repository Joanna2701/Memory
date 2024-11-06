let seconds = 0;
let timerInterval; // Intervales de secondes
let timerStarted = false; // Évite de relancer plusieurs fois


const cardsArray = [  "./img/batte.png",
    "./img/bonbons.png",
    "./img/chapeau.png",
    "./img/citrouille.png",
    "./img/cyclope.png",
    "./img/monstre.png",
    "./img/batte.png",
    "./img/bonbons.png",
    "./img/chapeau.png",
    "./img/citrouille.png",
    "./img/cyclope.png",
    "./img/monstre.png",


];

//Je sélectionne le container pour afficher les cartes dans le dom 

const gamerBoard = document.querySelector(".container_cards");

//Je créer et affiche des cartes dynamiquement

function createCards() {
    cardsArray.forEach((src) =>{
        //Element carte crée
        const card= document.creataeElement("div");
        card.classList.add("card");


        // Creation de l'objet interne pour retourner la carte
        const cardInner = document.createElement("div");
        cardFront.classList.add("card-front");

        //Je créer la face arrière de la carte à ce moment la
        const cardBack = document.createElement("div");
        cardBack.classLlist.add("card-back");

        //J'ajoute l'image de la face arrière de la carte
        const img = document.createElement("img");
        img.src = src;
        img.alt = "image de la carte ouais";
        cardBack.appendChild(img); //Element enfant

        //J'assemble les parties de la carte
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        //Ajoute une carte à la grille du jeu
        gamerBoard.appendChild(card);

        //Ajoute un évènement de clic pour retourner une carte je ne sais pas si ça fonctionne
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
            // Il faudra appeler la logique de vérification ici , checkformath ? ETc que sais je... 
        })
    }
}

// Maintenant j'appel la fonction d'affichage des cartes du jeu

createCards();


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

// Gestion du clic pour démarrer le timer
//document.addEventListener("DOMContentLoaded", () => {
    //const timerElement = document.getElementById("timer");
    //if (timerElement) {
        //timerElement.addEventListener("click", () => {
            //console.log("Timer démarré !");
            //if (!timerStarted) {
                //startTimer();
                //timerStarted = true;
                //timerElement.style.cursor = "default";
            //}
        //});
    //}
//});

// Vérifie si le jeu est terminé
function checkGameEnd() {
    const matchedCards = document.querySelectorAll('#container_cards');
    if (matchedCards.length === cardsArray.length) {
        stopTimer();
        alert(`Félicitations ! Le jeu est terminé en ${seconds} secondes.`);
    }
}

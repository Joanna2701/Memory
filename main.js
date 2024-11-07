let container_cards = document.querySelector("#container_cards");
let cardVisible = [];
let startGameBtn = document.querySelector("#startGame");
let timerInterval = 0;
let seconds = 0;
let timer = document.querySelector("#timer");
let totalCardVisible = 0;
let getPseudo = prompt("Pseudo ?");
let textPseudo = (document.querySelector("#pseudo").textContent = getPseudo);
let scores = 0;
let textScores = document.querySelector("#scores");
let container = document.querySelector("#container_cards");
const cards = container.querySelectorAll("div");
const tbody = document.querySelector("#tbody");

const arrSrc = [
  "./img/batte.png",
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

const arrPlayers = [
  { pseudo: "Joanna", score: 556 },
  { pseudo: "Francois", score: 1 },
  { pseudo: "Vincent", score: 1024 },
];

/**
 * methode qui affiche la liste des joueurs au tableau des scores
 */
function displayPlayerSorted(arrPlayers) {
  arrPlayers
    .sort((a, b) => {
      return a.score - b.score;
    })
    .map((player) => {
      tbody.innerHTML += `<tr>
        <th scope="col">classement</th>
        <th scope="col">${player.pseudo}</th>
        <th scope="col">${player.score}</th>
      </tr>`;
    });
}

/**
 * méthode qui prend en param un tableau d'image et créé une div avec une image
 * ajouté dans un container
 * @param {*} arrSrc
 */
function createCard(arrSrc) {
  for (let index = 0; index < arrSrc.length; index++) {
    let div = document.createElement("div");
    div.dataset.id = index;

    div.classList.add("back_card");
    container_cards.append(div);
  }
}

/**
 * methode qui cree et demarre un timer
 */
function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    timer.textContent = seconds;
  }, 1000);
}

/**
 * methode qui arrete le startTimer
 */
function stopTimer() {
  clearInterval(timerInterval);
}

/**
 * methode qui prend en param un tableau et le mélange
 * @param {*} arr
 */

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * méthode qui compare deux carte si elles sont identiques ou pas
 */
function compareCards(card) {
  cardVisible.push(card);

  if (cardVisible.length === 2) {
    const [firstCard, secondCard] = cardVisible;

    if (firstCard.style.backgroundImage === secondCard.style.backgroundImage) {
      firstCard.pointerEvents = "none";
      secondCard.pointerEvents = "none";

      totalCardVisible += 2;
      scores += 1;
      textScores.textContent = scores;
      cardVisible = [];
    }
  } else if (cardVisible.length === 3) {
    const [firstCard, secondCard] = cardVisible;

    firstCard.style.backgroundImage = "";
    firstCard.classList.remove("card");
    firstCard.classList.add("back_card");

    secondCard.style.backgroundImage = "";
    secondCard.classList.remove("card");
    secondCard.classList.add("back_card");

    scores += 1;
    textScores.textContent = scores;
    cardVisible = [card];
  }
}

// Début du jeu //
displayPlayerSorted(arrPlayers);
createCard(arrSrc);

startGameBtn.addEventListener("click", function () {
  stopTimer();
  seconds = 0;
  timer.textContent = 0;
  totalCardVisible = 0;
  scores = 0;

  container_cards.innerHTML = "";
  const newArr = shuffleArr(arrSrc);
  createCard(newArr);

  const cards = container_cards.querySelectorAll("div");

  textScores.textContent = 0;
  startTimer();
  startGameBtn.textContent = "Rejouer";

  for (let card of cards) {
    card.addEventListener("click", function () {
      let index = card.getAttribute("data-id");

      if (card.classList.contains("card")) return;

      card.style.backgroundImage = `url(${arrSrc[index]})`;
      card.classList.remove("back_card");
      card.classList.add("card");
      compareCards(card);

      if (totalCardVisible === 12) {
        stopTimer();
      }
    });
  }
});

// On affiche les cartes au clic
//test timer
// let p = document.querySelector(".timer");

// let count = 0;

// let testTimer = setInterval(() => {
//   count++;
//   p.textContent = `timer${count}`;
// }, 1000);

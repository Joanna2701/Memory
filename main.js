let container_cards = document.querySelector("#container_cards");
let cardVisible= [];
let startGameBtn = document.querySelector("#startGame");
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
 * 
 */
function compareCards(card) {
  cardVisible.push(card);

if (cardVisible.length === 2) {
  const [firstCard, secondCard] = cardVisible;

  if (firstCard.style.backgroundImage === secondCard.style.backgroundImage) {
    firstCard.pointerEvents = "none";
    secondCard.pointerEvents = "none";

    cardVisible= [];
  }
}
else if(cardVisible.length === 3) {
  const [firstCard, secondCard] = cardVisible;

  firstCard.style.backgroundImage = "";
  firstCard.classList.remove("card");
  firstCard.classList.add("back_card");

  secondCard.style.backgroundImage = "";
  secondCard.classList.remove("card");
  secondCard.classList.add("back_card");

  cardVisible = [card];
}
}

const newArr = shuffleArr(arrSrc);
createCard(newArr);

let container = document.querySelector("#container_cards");
const cards = container.querySelectorAll("div");

// Evenement au clic
// for (let card of cards) {
//   card.addEventListener("click", function () {
//     let index = card.getAttribute("data-id");

//     if (card.classList.contains("card")) return;
 
//       card.style.backgroundImage = `url(${arrSrc[index]})`;
//       card.classList.remove("back_card");
//       card.classList.add("card");
//       compareCards(card);

//   });
// }

startGameBtn.addEventListener('click',function() {
  // Evenement au clic
  cards.forEach(card=> {
    card.style.backgroundImage = "";
    card.classList.remove("card");
    card.classList.add("back_card");
  })

for (let card of cards) {
  card.addEventListener("click", function () {
    let index = card.getAttribute("data-id");

    if (card.classList.contains("card")) return;
 
      card.style.backgroundImage = `url(${arrSrc[index]})`;
      card.classList.remove("back_card");
      card.classList.add("card");
      compareCards(card);

  });
}
})

// On affiche les cartes au clic
//test timer
// let p = document.querySelector(".timer");

// let count = 0;

// let testTimer = setInterval(() => {
//   count++;
//   p.textContent = `timer${count}`;
// }, 1000);

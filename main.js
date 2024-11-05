let container_cards = document.querySelector("#container_cards");
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

const newArr = shuffleArr(arrSrc);
console.log(newArr);
createCard(newArr);

let container = document.querySelector("#container_cards");
const cards = container.querySelectorAll("div");

// Evenement au clic
for (let card of cards) {
  card.addEventListener("click", function () {
    let index = card.getAttribute("data-id");

    if (card.classList.contains("card")) {
      card.style.backgroundImage = `url('')`;
      card.classList.remove("card");
      card.classList.add("back_card");
    } else {
      card.style.backgroundImage = `url(${arrSrc[index]})`;
      card.classList.remove("back_card");
      card.classList.add("card");
    }
  });
}

// On affiche les cartes au clic
//test timer
// let p = document.querySelector(".timer");

// let count = 0;

// let testTimer = setInterval(() => {
//   count++;
//   p.textContent = `timer${count}`;
// }, 1000);

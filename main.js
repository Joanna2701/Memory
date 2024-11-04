let container_cards = document.querySelector("#container_cards");
const arrSrc = [
  "./img/batte.png",
  "./img/bonbons.png",
  "./img/chapeau.png",
  "./img/citrouille.png",
  "./img/cyclope.png",
  "./img/monstre.png",
];

function createCard(arrSrc) {
  for (let index = 0; index < arrSrc.length; index++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = arrSrc[index];
    div.append(img);
    container_cards.append(div);
  }
}

createCard(arrSrc);

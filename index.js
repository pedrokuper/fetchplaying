const API_URL = "https://dog.ceo/api/breeds/image/random/3";

const randomDogsElement = document.querySelector(".random-dogs");
const btn = document.querySelector(".js-button");

async function getRandomDogs() {
    randomDogsElement.innerHTML = "";
    const response = await fetch(API_URL);
    const json = await response.json();

    json.message.forEach(dogImage => {
        const columenElement = document.createElement("div");
        columenElement.classList.add("column");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        columenElement.appendChild(cardElement);

        const cardImageElement = document.createElement("div");
        cardImageElement.classList.add("card-image");

        cardElement.appendChild(cardImageElement);

        const figureElement = document.createElement("figure");

        figureElement.classList.add("image");
        //figureElement.classList.add("is-4by3");

        cardImageElement.appendChild(figureElement);

        const imageElement = document.createElement("img")

        imageElement.src = dogImage;

        figureElement.appendChild(imageElement);

        randomDogsElement.appendChild(columenElement);


    });
}


addEventListener("click", getRandomDogs);
"use strict";
document
  .querySelector(".back-to-top a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

const cardInfoDiv = document.querySelector(".text-images");
const cardInfo = [
  {
    image: "./image/img1.webp",
    h3: "Six Senses",
    text: "From tropical islands to urban treasures, Six Senses creates places that live in harmony with local                  ecosystems and communities, helping people to reconnect to the world around them.",
    attr: `EXPLORE SIX SENSES`,
  },

  {
    image: "./image/img2.avif",
    h3: "Regent Hotels",
    text: "Each hotel and resort embodies a unique charm and elegance sparking stays both serene and sensational. A place where experiences inspire stories for even the most seasoned travelers. This is Regent.",
    attr: `EXPLORE REGENT`,
  },

  {
    image: "./image/img3.jpeg",
    h3: "InterContinental Hotels and Resorts",
    text: "Experience the exhilaration of fascinating moments and places brought to life by international know-how and local cultural wisdom.",
    attr: `EXPLORE INTERCONTINENTAL`,
  },

  {
    image: "./image/img4.jpeg",
    h3: "Vignette Collection",
    text: "A family of distinctive hotels, with a fresh focus, where you can indulge a growing passion for stays that are authentic, experiential, and considerate. One that puts people at the heart of everything we do, to reframe luxury hospitality for the better. ",
    attr: `EXPLORE VIGNETTE COLLECTION`,
  },

  {
    image: "./image/img5.avif",
    h3: "Kimpton",
    text: "Truly unique properties with a guest experience to match. Enjoy thoughtful amenities, playful design, and a sincerely personal style of service with the sophistication of a boutique experience.",
    attr: `EXPLORE KIMPTON`,
  },

  {
    image: "./image/img6.avif",
    h3: "Hotel Indigo​",
    text: "We attract the curious—people who are inspired by new places—to discover unique and stylish boutique hotels in culturally diverse neighborhoods all over the world.",
    attr: `EXPLORE HOTEL INDIGO`,
  },
];

const cardInfoDisplay = (info) => {
  cardInfoDiv.innerHTML = "";
  info.forEach((element, idx) => {
    const htmlDiv = document.createElement("div");
    htmlDiv.className =
      "container-image-text" + (idx % 2 === 1 ? " reverse" : "");
    htmlDiv.innerHTML = `
      <img src="${element.image}" alt="">
      <div class="text-container">
        <h3>${element.h3}</h3>
        <p>${element.text}</p>
        <a class="cmp-teaser__action-link cmp-button"
            href="https://www.sixsenses.com/en?scmisc=WEB-_-6C-_-GLO-_-EN-_-AWA-_-BrandsPage-_-PageCTA-_-SixSenses"
            target="_blank" aria-label="EXPLORE SIX SENSES, opens new window"
            aria-describedby="teaser-header-1">
            <span class="cmp-button__text"> ${element.attr} </span>
        </a>
      </div>
    `;
    cardInfoDiv.appendChild(htmlDiv);
  });
};

cardInfoDisplay(cardInfo);

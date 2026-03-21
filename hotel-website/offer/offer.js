"use strict";
document
  .querySelector(".back-to-top a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// ============== making card container ==============
const cardInfoDiv = document.querySelector(".image-container");
const cardInfo = [
  {
    image: "./image/image1.avif",
    h3: "Stay a little longer",
    text: "Get extra Suite nights, on us. Valid across the Middle East, Europe, India, Asia, Africa, Australia, New Zealand, South Pacific and Maldives on stays until 31 October 2025.",
  },

  {
    image: "./image/image2.avif",
    h3: "Buy points and get there faster",
    text: "With two ways to buy points, you can reach what you want faster. Buy points to stock up for future travel or add Elite Qualifying points to a booking.",
  },

  {
    image: "./image/image3.jpeg",
    h3: "Your summer resort hot list",
    text: "Explore all-inclusive, adults only and more at our Luxury & Lifestyle resorts across Mexico, Latin America and the Caribbean for a summer escape to remember.",
  },

  {
    image: "./image/image4.avif",
    h3: "Save up to 15% at Iberostar Beachfront Resorts",
    text: "Book a family or couples' vacation and save up to 15% at Iberostar Beachfront Resorts in Europe and northern Africa.",
  },

  {
    image: "./image/image5.avif",
    h3: "Buy, gift, or transfer points",
    text: "Enjoy endless possibilities with Points Purchase.",
  },

  {
    image: "./image/image6.avif",
    h3: "Reward yourself with a Reward Night​",
    text: "With your IHG One Rewards points, you can book a Reward Night at one of our 6,600+ hotels around the world. Reward Nights start at just 5K points.",
  },

  {
    image: "./image/image7.avif",
    h3: "Rewards are just a tap away",
    text: "Download the IHG One Rewards app today. Enjoy fast booking and Rewards on the go – however and wherever you travel.",
  },

  {
    image: "./image/image8.avif",
    h3: "Travel like you mean it",
    text: "Explore our collections to find the perfect spot for your next vacation, meeting or bucket-list escape. Discover more with our 20 brands and 6,600+ destinations.",
  },

  {
    image: "./image/image9.jpeg",
    h3: "Stay at IHG and earn towards flights",
    text: "IHG One Rewards Members can earn miles for their stays",
  },
];

const cardInfoDisplay = (info) => {
  cardInfoDiv.innerHTML = "";
  info.forEach((element) => {
    const htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = `
    <div class="card1">
                <img src="${element.image}" alt="${element.h3}">
                <div class="card1-content">
                    <h3>${element.h3}</h3>
                    <p>${element.text}</p>
                    <a class="cmp-teaser__action-link cmp-button "
                        href="https://ihg.onelink.me/ihg/ed15vj8u?cm_sp=WEB-_-6C-_-OFFERS-_-MOD1-_-GB-EN-_-REV-_-SUITEDEALS-_--_-25Q2-SUITEDEALS-S2"
                        data-registeredofferids="" target="_blank">
                        <span class="cmp-button__text"> Book now</span>
                    </a>
                    <i class="uil uil-angle-right-b right"></i>
                </div>
            </div>
    `;

    cardInfoDiv.appendChild(htmlDiv);
  });
};

cardInfoDisplay(cardInfo);

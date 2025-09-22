"use strict";

// menu fade animation
const nav = document.querySelector(".navbar");

const handleHover = function (e) {
  if (e.target.classList.contains("nav-item")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-item");
    const logo = link.closest(".navbar").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// dropdown for Rooms & Guests only
const roomsArrow = document.querySelector(".rooms-arrow");
const dropdownDiv = document.querySelector(".dropdown");
const roomsArrowUp = document.querySelector(".rooms-arrow-up");

// Show dropdown with fade-in
roomsArrow.addEventListener("click", function () {
  dropdownDiv.classList.add("show");
  roomsArrow.style.display = "none";
  roomsArrowUp.style.display = "inline-block";
});

// Hide dropdown with fade-out
roomsArrowUp.addEventListener("click", function () {
  dropdownDiv.classList.remove("show");
  roomsArrowUp.style.display = "none";
  roomsArrow.style.display = "inline-block";
});

/* // Slider component
const slider = function () {
  const slides = document.querySelectorAll(".slide1");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous slide
  const prevSlide = function () {
    curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider(); */

// HOTEL INFO OBJECTS
const hotelInfoDiv = document.querySelector(".section3");
const hotelInfo = [
  {
    slide1: "./image-folder/Holiday/image1.avif",
    slide2: "./image-folder/Holiday/image1.jpeg",
    slide3: "./image-folder/Holiday/image3.jpg",
    slide4: "./image-folder/Holiday/image4.avif",
    slide5: "./image-folder/Holiday/image5.jpeg",
    logo: "./image-folder/Holiday/logo.webp",
    name: "Holiday Inn Express London - Victoria",
    location:
      "Carburton Street, London W1W 5EE United Kingdom1 888 HOLIDAY (1 888 465 4329)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "2.96 km (1.84mi) from city centre",
    website: "www.holidayinn.com",
    breakfast: "free breakfast",
    wifi: "Free",
    parking: "Free",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 11.75 + " /night",
  },

  {
    slide1: "./image-folder/Holiday-inn/image1.avif",
    slide2: "./image-folder/Holiday-inn/image2.avif",
    slide3: "./image-folder/Holiday-inn/image2.jpeg",
    slide4: "./image-folder/Holiday-inn/image3.avif",
    slide5: "./image-folder/Holiday-inn/image5.jpeg",
    logo: "./image-folder/Holiday-inn/holiday-inn-logo-png_seeklogo-240482.png",
    name: "Holiday Inn London - Regent's Park",
    location:
      "106-110 Belgrave Road, London SW1V 2BJ United Kingdom 1 888 HOLIDAY (1 888 465 4329)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "🏙️ 0.82 km (0.51mi) from city centre",
    website: "www.holidayinn.com",
    breakfast: "Sustainable Practices",
    wifi: "Wireless Internet",
    parking: "In-hotel restaurants",
    pet: "No pets allowed",
    rating: 4.2,
    price: "From " + 12.53 + " RON /night",
  },

  {
    slide1: "./image-folder/InterContinental/image4.jpg",
    slide2: "./image-folder/InterContinental/image1.jpeg",
    slide3: "./image-folder/InterContinental/image3.jpeg",
    slide4: "./image-folder/InterContinental/image2.webp",
    slide5: "./image-folder/InterContinental/image5.webp",
    logo: "./image-folder/InterContinental/logo.png",
    name: "InterContinental London Park Lane",
    location:
      "One Hamilton Place Park Lane, London W1J 7QY United Kingdom1 888 IC HOTELS (1 888 424 6835)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "1 km (0.62mi) from city centre",
    website: "www.holidayinn.com",
    breakfast: "free breakfast",
    wifi: "Health/Fitness Centre",
    parking: "In-hotel restaurants",
    pet: "No pets allowed",
    rating: 4.2,
    price: "From " + 27.75 + " /night",
  },

  {
    slide1: "./image-folder/Kimpton/image1.jpeg",
    slide2: "./image-folder/Kimpton/image2.jpg",
    slide3: "./image-folder/Kimpton/image3.jpg",
    slide4: "./image-folder/Kimpton/image4.jpg",
    slide5: "./image-folder/Kimpton/image5.jpg",
    logo: "./image-folder/Kimpton/logo.png",
    name: "Kimpton Fitzroy London",
    location:
      "1-8 Russell Square Bloomsbury, London WC1B 5BE United Kingdom1 800 546 7866",
    description: "A comfortable hotel located in the heart of the city.",
    address: "3.28 km (2.04mi) from city centre",
    website: "www.kimptonhotels.com",
    breakfast: "Health/Fitness Centre",
    wifi: "Wireless Internet",
    parking: "In-hotel restaurants",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 17.54 + " /night",
  },

  {
    slide1: "./image-folder/The-Welbeck/image1.jpg",
    slide2: "./image-folder/The-Welbeck/image2.jpg",
    slide3: "./image-folder/The-Welbeck/image3.jpeg",
    slide4: "./image-folder/The-Welbeck/image4.avif",
    slide5: "./image-folder/The-Welbeck/image5.webp",
    logo: "./image-folder/The-Welbeck/logo.png",
    name: "The Welbeck HotelWelbeck Hotel - Close to Beach",
    location:
      "Palmerston Road, Southend-on-Sea, SS0 7TA, United Kingdom. +44 1702 344 455",
    description: "A comfortable hotel located in the heart of the city.",
    address: "🏙️ 0.82 km (0.51mi) from city centre",
    website: "www.welbeckhotel.com",
    breakfast: "free breakfast",
    wifi: "Free",
    parking: "In-hotel restaurants",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 14.55 + " /night",
  },

  {
    slide1: "./image-folder/voco-london/image1.webp",
    slide2: "./image-folder/voco-london/image2.avif",
    slide3: "./image-folder/voco-london/image3.jpg",
    slide4: "./image-folder/voco-london/image4.webp",
    slide5: "./image-folder/voco-london/image5.jpg",
    logo: "./image-folder/voco-london/logo.avif",
    name: "voco London - Marylebone",
    location:
      "106-110 Belgrave Road, London SW1V 2BJ United Kingdom 1 888 HOLIDAY (1 888 465 4329)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "🏙️ 0.82 km (0.51mi) from city centre",
    website: "www.holidayinn.com",
    breakfast: "free breakfast",
    wifi: "wireless Internet",
    parking: "fitness Centre",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 1222 + " /night",
  },

  {
    slide1: "./image-folder/Staybridge/image1.jpeg",
    slide2: "./image-folder/Staybridge/image2.jpeg",
    slide3: "./image-folder/Staybridge/image3.jpg",
    slide4: "./image-folder/Staybridge/image4.avif",
    slide5: "./image-folder/Staybridge/image5.jpg",
    logo: "./image-folder/Staybridge/logo.png",
    name: "Staybridge Suites London - Vauxhall",
    location: "100 Vauxhall Walk, London SE11 5EL United Kingdom1 877 238 8889",
    description: "A comfortable hotel located in the heart of the city.",
    address: "1.74 km (1.08mi) from city centre",
    website: "www.staybridge.com",
    breakfast: "Free Breakfast",
    wifi: "Wireless Internet",
    parking: "Health/Fitness Centre",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 1414 + " /night",
  },

  {
    slide1: "./image-folder/Crowne-plaza/image1.avif",
    slide2: "./image-folder/Crowne-plaza/image2.jpg",
    slide3: "./image-folder/Crowne-plaza/image3.jpg",
    slide4: "./image-folder/Crowne-plaza/image4.jpg",
    slide5: "./image-folder/Crowne-plaza/image5.avif",
    logo: "./image-folder/Crowne-plaza/logo.png",
    name: "Crowne Plaza London - Kings Cross",
    location:
      "1 Kings Cross Road, London WC1X 9HX United Kingdom1 877 2 CROWNE (1 877 227 6963)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "🏙️ 0.82 km (0.51mi) from city centre",
    website: "www.crowneplaza.com",
    breakfast: "free breakfast",
    wifi: "Wireless Internet",
    parking: "Health/Fitness Centre",
    pet: "No pets allowed",
    rating: 4.2,
    price: 11.31 + " /night",
  },

  {
    slide1: "./image-folder/InterContinental-london/image1.jpeg",
    slide2: "./image-folder/InterContinental-london/image2.avif",
    slide3: "./image-folder/InterContinental-london/image3.webp",
    slide4: "./image-folder/InterContinental-london/image4.jpeg",
    slide5: "./image-folder/InterContinental-london/image5.jpeg",
    logo: "./image-folder/InterContinental-london/logo.webp",
    name: "InterContinental London Park Lane",
    location:
      "106-110 Belgrave Road, London SW1V 2BJ United Kingdom 1 888 HOLIDAY (1 888 465 4329)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "🏙️ 0.82 km (0.51mi) from city centre",
    address2:
      "📍 106-110 Belgrave Road, London SW1V 2BJ, United Kingdom <br>0.82 km (0.51 mi) from city centre",
    website: "www.holidayinn.com",
    breakfast: "In-hotel restaurants",
    wifi: "Wireless Internet",
    parking: "Health/Fitness Centre",
    pet: "Pets allowed",
    rating: 4.2,
    price: "From " + 28.86 + " RON /night",
  },

  {
    slide1: "./image-folder/Hotel-indigo/image1.jpg",
    slide2: "./image-folder/Hotel-indigo/image3.webp",
    slide3: "./image-folder/Hotel-indigo/image4.jpg",
    slide4: "./image-folder/Hotel-indigo/image4.jpg",
    slide5: "./image-folder/Hotel-indigo/image5.webp",
    logo: "./image-folder/Hotel-indigo/logo.png",
    name: "Hotel Indigo London - 1 Leicester Square",
    location:
      "1 Leicester Square, London WC2H 7NA United Kingdom1 877 8 INDIGO (1 877 846 3446)",
    description: "A comfortable hotel located in the heart of the city.",
    address: "1.9 km (1.18mi) from city centre",
    website: "www.indigo.com",
    breakfast: "In-hotel restaurants",
    wifi: "Wireless Internet",
    parking: "In-hotel restaurants",
    pet: "No pets allowed",
    rating: 4.2,
    price: 12.53 + " RON /night",
  },
];

// Render hotel info and slider
function displayHotelInfo(info) {
  hotelInfoDiv.innerHTML = "";
  info.forEach((hotel, idx) => {
    const htmlDiv = document.createElement("div");
    htmlDiv.innerHTML = `
  <div class="container1">
                <div class="hotel-card slider" id="slider-${idx}">
                    <div class="slide1">
                        <img src="${hotelInfo[idx].slide1}" alt="image1" class="hotel-image">
                    </div>
                    <div class="slide1">
                        <img src="${hotelInfo[idx].slide2}" alt="image2" class="hotel-image">
                    </div>
                    <div class="slide1">
                        <img src="${hotelInfo[idx].slide3}" alt="image4" class="hotel-image">
                    </div>
                    <div class="slide1">
                        <img src="${hotelInfo[idx].slide4}" alt="image5" class="hotel-image">
                    </div>
                    <div class="slide1">
                        <img src="${hotelInfo[idx].slide5}" alt="image5" class="hotel-image">
                    </div>
                    <button class="slider__btn slider__btn--left">&larr;</button>
                    <button class="slider__btn slider__btn--right">&rarr;</button>
                    <div class="dots"></div>
                </div>
                <!-- Hotel Info -->
                <div class="hotel-info">
                    <div class="hotel-info__header">
                        <div class="hotel-header">
                            <div class="header">
                                <img src="${hotelInfo[idx].logo}" alt="" class="logo">
                                <h2>${hotelInfo[idx].name}</h2>
                            </div>
                            <div class="contact">
                                <span class="location">${hotelInfo[idx].location}</span>
                            </div>
                            <div class="rating">
                                <span>⭐ ⭐ ⭐ ⭐</span>
                                <span>1624 reviews</span>
                                <div>
                                    <i class="uil uil-map-marker-alt"></i>
                                    <span>${hotelInfo[idx].address}</span>
                                </div>
                            </div>
                        </div>
                        <div class="hotel-description">
                        <p>${hotelInfo[idx].description}</p>
                    </div>

                    <div class="hotel-info__price">
                        <div class="website">
                            <i class="uil uil-store-alt"></i>
                            <a href="https://www.holidayinn.com/">${hotelInfo[idx].website}</a>
                        </div>

                        <div class="breakfast">
                            <div class="features">
                                <div class="cup">
                                    <i class="uil uil-coffee"></i>
                                    <span>${hotelInfo[idx].breakfast}</span>
                                </div>
                                <div class="wifi">
                                    <i class="uil uil-wifi"></i>
                                    <span>${hotelInfo[idx].wifi}</span>
                                </div>
                            </div>
                            <div class="pets">
                                <i class="uil uil-paw"></i>
                                <span>🐕 ${hotelInfo[idx].pet}</span>
                            </div>
                            <div class="pets">
                                <i class="uil uil-dumbbell"></i>
                                <span>🏋️‍♂️ ${hotelInfo[idx].parking}</span>
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <div class="price">${hotelInfo[idx].price}</div>
                        <button class="btn-select">Select Hotel</button>
                    </div>
                </div>
            </div>
            </div>


            </div>
    `;
    hotelInfoDiv.appendChild(htmlDiv);

    // Initialize slider for this hotel
    initSlider(`#slider-${idx}`);
  });
}

// Slider initialization for a specific slider
function initSlider(selector) {
  const sliderEl = document.querySelector(selector);
  if (!sliderEl) return;
  const slides = sliderEl.querySelectorAll(".slide1");
  const btnLeft = sliderEl.querySelector(".slider__btn--left");
  const btnRight = sliderEl.querySelector(".slider__btn--right");
  const dotContainer = sliderEl.querySelector(".dots");
  let curSlide = 0;
  const maxSlide = slides.length;

  // Create dots
  dotContainer.innerHTML = "";
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });

  // Activate dot
  function activateDot(slide) {
    dotContainer
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    dotContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  }

  // Go to slide
  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  // Next slide
  function nextSlide() {
    curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // Previous slide
  function prevSlide() {
    curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // Initial setup
  goToSlide(0);
  activateDot(0);

  // Event listeners
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
}

displayHotelInfo(hotelInfo);

// ================= BACK TO TOP =====================

document
  .querySelector(".back-to-top a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

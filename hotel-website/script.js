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

if (roomsArrow && dropdownDiv && roomsArrowUp) {
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
}

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

// Render hotel info cards dynamically
function displayHotelInfo(info) {
  const hotelContainer = document.querySelector(".section3 .container");
  if (!hotelContainer) return;

  hotelContainer.innerHTML = "";

  info.forEach((hotel, index) => {
    const card = document.createElement("div");
    card.className = "card bg-white border mb-4 shadow-sm";

    const slides = [
      hotel.slide1,
      hotel.slide2,
      hotel.slide3,
      hotel.slide4,
      hotel.slide5,
    ].filter(Boolean);
    const carouselId = `hotelCarousel-${index}`;

    const indicators = slides
      .map(
        (slide, slideIndex) =>
          `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${slideIndex}" class="${
            slideIndex === 0 ? "active" : ""
          }" aria-current="${slideIndex === 0 ? "true" : "false"}" aria-label="Slide ${slideIndex + 1}"></button>`,
      )
      .join("");

    const slideItems = slides
      .map(
        (slide, slideIndex) =>
          `<div class="carousel-item ${slideIndex === 0 ? "active" : ""}">
              <img src="${slide}" class="d-block w-100" alt="${hotel.name} image ${slideIndex + 1}" style="height: 280px; object-fit: cover;" />
             </div>`,
      )
      .join("");

    card.innerHTML = `
      <div class="row g-0 align-items-center">
        <div class="col-md-5">
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              ${indicators}
            </div>
            <div class="carousel-inner">
              ${slideItems}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <img src="${hotel.logo}" alt="${hotel.name} logo" style="height: 28px; margin-right: 10px; object-fit: contain;" />
              <h3 class="card-title mb-0">${hotel.name}</h3>
            </div>
            <p class="mb-1"><i class="uil uil-map-marker-alt"></i> ${hotel.location}</p>
            <p class="mb-2"><i class="uil uil-phone-alt"></i> ${hotel.location.includes("1 888") ? hotel.location.split(" ").slice(-4).join(" ") : ""}</p>
            <div class="mb-2">
              <span class="text-warning">${"★".repeat(Math.round(hotel.rating))}</span>
              <span class="ms-2 text-muted">${hotel.rating} (${hotel.address})</span>
            </div>
            <div class="mb-3 d-flex flex-wrap gap-2">
              <span class="badge bg-success">${hotel.breakfast}</span>
              <span class="badge bg-success">${hotel.wifi}</span>
              <span class="badge bg-info">${hotel.parking}</span>
              <span class="badge bg-info">${hotel.pet}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h4 class="text-danger mb-1">${hotel.price}</h4>
                <a href="https://${hotel.website}" target="_blank" class="text-decoration-none">${hotel.website}</a>
              </div>
              <button class="btn btn-danger btn-lg">Select Hotel</button>
            </div>
          </div>
        </div>
      </div>
    `;

    hotelContainer.appendChild(card);
  });
}

// render data now
if (Array.isArray(hotelInfo) && hotelInfo.length) {
  displayHotelInfo(hotelInfo);
}

// ================= BACK TO TOP =====================
const backToTop = document.querySelector(".back-to-top a");
if (backToTop) {
  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =============== CURRENT YEAR =====================
const yearEl = document.querySelector("#year");
if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

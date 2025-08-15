'use strict';
const currentYear = new Date().getFullYear();
const date = document.getElementById('current-year');
date.innerHTML = currentYear;

const listItems = document.querySelector('.list-items');
const countItems = document.querySelector('.count');
const myList = document.querySelector('.my-list');
const groceryListHeader = document.querySelector('.grocery-list-header');
const tagHeader = document.querySelector('.tags-header');
const fruitTags = document.querySelector('.item-name');

myList.addEventListener('click', () => {
  listItems.classList.toggle('.show');
  console.log('i got click');
});

// ============== FRUIT ITEMS ===============

const fruitContainer = document.querySelector('.fruit-items');

const fruitItems = [
  {
    image: './items-image/avocado.jpg',
    name: 'Avocado',
    price: '$2.5',
    description:
      '🥑 A ripe avocado with dark green, bumpy skin and creamy light green flesh.',
  },

  {
    image: './items-image/banana.jpg',
    name: 'Banana',
    price: '$2.5',
    description: '🍌 eat bananas for Regulates Blood Sugar Levels. ...',
  },

  {
    image: './items-image/dragan-fruit.jpg',
    name: 'Dragon fruit',
    price: '$3',
    description:
      ' Dragon fruit is high in fiber, which can help to regulate digestion and prevent constipation.',
  },

  {
    image: './items-image/watermelon.jpg',
    name: 'Watermelon',
    price: '$1',
    description:
      '🍉 Watermelon provides various health benefits, including hydration and vitamin C. ',
  },

  {
    image: './items-image/pomogranate.jpg',
    name: 'Pomogranate',
    price: '$3.5',
    description:
      'Urinary health support digestive health benefits elevated endurance.',
  },

  {
    image: './items-image/kiwi.jpg',
    name: 'kiwi',
    price: '$5',
    description:
      '🥝 blood sugar regulation and heart health and help support healthy gut bacteria.',
  },
];

const renderFruits = items => {
  fruitContainer.innerHTML = ''; // Clear previous items
  items.forEach(fruit => {
    const fruitDiv = document.createElement('div');
    fruitDiv.classList.add('fruit-item');
    fruitDiv.innerHTML = `
      <div class="favorite-items fruit-item">
        <i class="uil uil-heart"></i>
        <img src="${fruit.image}" alt="${fruit.name}">
        <span class="line"></span>
        <div class="description">
          <div class="price-name">
            <span class="item-name">${fruit.name}</span>
            <span class="price">${fruit.price}</span>
          </div>
          <span class="descriptions">${fruit.description}</span>
          <div class="input-item">
            <input type="text">
            <button class="add">Add</button>
          </div>
        </div>
      </div>
      `;
    fruitContainer.appendChild(fruitDiv);
  });
};

// 3. Initial render
renderFruits(fruitItems);

// ========== VEGITABLE ==========
const vegContainer = document.querySelector('.veg-items');
const vegItems = [
  {
    image: './items-image/bringal-big.jpg',
    name: 'Bringle Big',
    price: '$1.5',
    description: '🥑 A ripe avocado with dark green, bumpy',
  },

  {
    image: './items-image/bringal-long.jpg',
    name: 'Bringal Long',
    price: '$2',
    description: '🍌 eat bananas for Regulates Blood Sugar Levels. ...',
  },

  {
    image: './items-image/carot.jpg',
    name: 'Carot',
    price: '$3',
    description: ' Dragon fruit is high in fiber, which can help to',
  },

  {
    image: './items-image/cucumber.jpg',
    name: 'Cucumber',
    price: '$1.5',
    description: '🍉 Watermelon provides various health  ',
  },

  {
    image: './items-image/gante-mula.jpg',
    name: 'Gante Mula',
    price: '$3',
    description: 'Urinary health support digestive health',
  },

  {
    image: './items-image/green-capsicum.jpg',
    name: 'kiwi',
    price: '$3.5',
    description: '🥝 blood sugar regulation and heart health ',
  },

  {
    image: './items-image/white-cavage.jpg',
    name: 'White Cavage',
    price: '$1',
    description: '🥝 blood sugar regulation and ',
  },

  {
    image: './items-image/tomato.jpg',
    name: 'Tomato',
    price: '$3',
    description: '🥝 blood sugar regulation and ',
  },

  {
    image: './items-image/potato.jpg',
    name: 'White Potato',
    price: '$1',
    description: '🥝 blood sugar regulation and ',
  },

  {
    image: './items-image/bitter-gourd.jpg',
    name: 'Bitter Gourd',
    price: '$1',
    description: '🥝 blood sugar regulation and ',
  },
];

const renderveg = items => {
  vegContainer.innerHTML = ''; // Clear previous items
  items.forEach(veg => {
    const vegDiv = document.createElement('div');
    vegDiv.classList.add('vegitable');
    vegDiv.innerHTML = `
      <div class="favorite-items vegitable">
                        <i class="uil uil-heart"></i>
                        <img src="${veg.image}" alt="${veg.name}">
                        <span class="line"></span>
                        <div class="description">
                            <div class="price-name">
                                <span class="item-name">${veg.name}</span>
                                <span class="price">${veg.price}</span>
                            </div>
                            <span class="descriptions">${veg.description}</span>
                            <div class="input-item">
                                <input type="text">
                                <button class="add">Add</button>
                            </div>
                        </div>
                    </div>
      `;
    vegContainer.appendChild(vegDiv);
  });
};

// 3. Initial render
renderveg(vegItems);

// =================== RICE ITEMS ===================
const riceContainer = document.querySelector('.rice-items');
const riceItems = [
  {
    image: './items-image/black-rice.jpg',
    name: 'Black Rice',
    price: '$5',
    description: '🥑 A ripe avocado with dark green, bumpy',
  },

  {
    image: './items-image/brown-rice.jpg',
    name: 'Brown Rice',
    price: '$4',
    description: '🍌 eat bananas for Regulates Blood Sugar Levels. ...',
  },

  {
    image: './items-image/jeera-rice.jpg',
    name: 'Jeera Rice',
    price: '$2',
    description: ' Dragon fruit is high in fiber, which can help to',
  },

  {
    image: './items-image/rice-round.jpg',
    name: 'Round Rice',
    price: '$1.5',
    description: '🍉 Watermelon provides various health  ',
  },

  {
    image:
      './items-image/Non-basmati-white-rice-IMF-encourages-India-to-remove-export-restrictions.png.webp',
    name: 'Non Basmati Rice',
    price: '$2',
    description: 'Urinary health support digestive health',
  },

  {
    image: './items-image/long-grain.jpg',
    name: 'Long Grain Rice',
    price: '$2.5',
    description: '🥝 blood sugar regulation and heart health ',
  },

  {
    image: './items-image/basmati-rice.webp',
    name: 'Basmati Rice',
    price: '$1',
    description: '🥝 blood sugar regulation and ',
  },
];

const renderRice = items => {
  riceContainer.innerHTML = ''; // Clear previous items
  items.forEach(rice => {
    const riceDiv = document.createElement('div');
    riceDiv.classList.add('rice');
    riceDiv.innerHTML = `
      <div class="favorite-items rice">
                        <i class="uil uil-heart"></i>
                        <img src="${rice.image}" alt="${rice.name}">
                        <span class="line"></span>
                        <div class="description">
                            <div class="price-name">
                                <span class="item-name">${rice.name}</span>
                                <span class="price">${rice.price}</span>
                            </div>
                            <span class="descriptions">${rice.description}</span>
                            <div class="input-item">
                                <input type="text">
                                <button class="add">Add</button>
                            </div>
                        </div>
                    </div>
      `;
    riceContainer.appendChild(riceDiv);
  });
};

// 3. Initial render
renderRice(riceItems);

// =================== RICE ITEMS ===================
const meatContainer = document.querySelector('.meat-items');
const meatItems = [
  {
    image: './items-image/beef-meat.jpg',
    name: 'Beef Meat',
    price: '$8',
    description: '🥑 A ripe avocado with dark green, bumpy',
  },

  {
    image: './items-image/chicken-brest.jpg',
    name: 'Chicken Brest',
    price: '$4',
    description: '🍌 eat bananas for Regulates Blood Sugar Levels. ...',
  },

  {
    image: './items-image/chicken-legs.jpg',
    name: 'Chicken Leg',
    price: '$3',
    description: ' Dragon fruit is high in fiber, which can help to',
  },

  {
    image: './items-image/fresh-meat.jpg',
    name: 'Beef Hams',
    price: '$11',
    description: '🍉 Watermelon provides various health  ',
  },

  {
    image: './items-image/goat-legs.jpg',
    name: 'Goat Legs',
    price: '$7',
    description: 'Urinary health support digestive health',
  },

  {
    image: './items-image/goat-ribs.jpg',
    name: 'Goat Ribs',
    price: '$7.5',
    description: '🥝 blood sugar regulation and heart health ',
  },

  {
    image: './items-image/whole-goat.jpg',
    name: 'Whole Goat',
    price: '$1',
    description: '🥝 blood sugar regulation and ',
  },

  {
    image: './items-image/whole-chicken.jpg',
    name: 'Whole Chicken',
    price: '$4',
    description: '🥑 A ripe avocado with dark green, bumpy',
  },

  {
    image: './items-image/pork-meat.jpg',
    name: 'Pork Meat',
    price: '$5',
    description: '🍌 eat bananas for Regulates Blood Sugar Levels. ...',
  },

  {
    image: './items-image/pork-3-layer.jpg',
    name: '3 Layer Pork',
    price: '$6',
    description: ' Dragon fruit is high in fiber, which can help to',
  },

  {
    image: './items-image/pork-hams.jpg',
    name: 'Pork Hams',
    price: '$11',
    description: '🍉 Watermelon provides various health  ',
  },
];

const renderMeat = items => {
  meatContainer.innerHTML = ''; // Clear previous items
  items.forEach(meat => {
    const meatDiv = document.createElement('div');
    meatDiv.classList.add('meat');
    meatDiv.innerHTML = `
      <div class="favorite-items meat">
                        <i class="uil uil-heart"></i>
                        <img src="${meat.image}" alt="${meat.name}">
                        <span class="line"></span>
                        <div class="description">
                            <div class="price-name">
                                <span class="item-name">${meat.name}</span>
                                <span class="price">${meat.price}</span>
                            </div>
                            <span class="descriptions">${meat.description}</span>
                            <div class="input-item">
                                <input type="text">
                                <button class="add">Add</button>
                            </div>
                        </div>
                    </div>
      `;
    meatContainer.appendChild(meatDiv);
  });
};

// 3. Initial render
renderMeat(meatItems);

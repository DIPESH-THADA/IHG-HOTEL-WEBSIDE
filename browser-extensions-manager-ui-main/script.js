'use strict';

// ...existing code...

// Dark/Light theme toggle
const themeToggleBtn = document.querySelector('.dark_light-toggle');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  // Optional: Swap icon
  if (body.classList.contains('dark')) {
    darkModeIcon.src = './assets/images/icon-sun.svg'; // Use your sun icon path
    darkModeIcon.alt = 'icon-sun';
  } else {
    darkModeIcon.src = './assets/images/icon-moon.svg'; // Use your moon icon path
    darkModeIcon.alt = 'icon-moon';
  }
});

// Set initial theme (optional)
if (!body.classList.contains('dark') && !body.classList.contains('light')) {
  body.classList.add('light');
}

// ...existing code...

//making active-inactive toggle
// ...existing code...

// Select all filter buttons
const allBtn = document.querySelector('.btns .btn:nth-child(1)');
const activeBtn = document.querySelector('.btns .btn:nth-child(2)');
const inactiveBtn = document.querySelector('.btns .btn:nth-child(3)');

// Select all extension cards
const extensionCards = document.querySelectorAll('.extension-card');

// Helper to update button active state
const setActiveButton = btn => {
  [allBtn, activeBtn, inactiveBtn].forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

// Show/hide cards based on filter
const filterExtensions = filter => {
  extensionCards.forEach(card => {
    const toggle = card.querySelector('input[type="checkbox"]');
    if (filter === 'all') {
      card.style.display = '';
    } else if (filter === 'active') {
      card.style.display = toggle.checked ? '' : 'none';
    } else if (filter === 'inactive') {
      card.style.display = !toggle.checked ? '' : 'none';
    }
  });
};

// Button event listeners
allBtn.addEventListener('click', () => {
  setActiveButton(allBtn);
  filterExtensions('all');
});
activeBtn.addEventListener('click', () => {
  setActiveButton(activeBtn);
  filterExtensions('active');
});
inactiveBtn.addEventListener('click', () => {
  setActiveButton(inactiveBtn);
  filterExtensions('inactive');
});

// Update filter if any toggle is changed
extensionCards.forEach(card => {
  const toggle = card.querySelector('input[type="checkbox"]');
  toggle.addEventListener('change', () => {
    // Find which filter is currently active
    if (activeBtn.classList.contains('active')) {
      filterExtensions('active');
    } else if (inactiveBtn.classList.contains('active')) {
      filterExtensions('inactive');
    }
    // No need to filter for 'all'
  });
});

// ...existing code...

// Remove button functionality
document.querySelectorAll('.btn-card').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = btn.closest('.extension-card');
    if (card) card.remove();
  });
});

// ...existing code...

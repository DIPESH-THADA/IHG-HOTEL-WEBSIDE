"use strict";
// Sample array of earbud products
const earbuds = [
  { name: "EarBuds X", price: 49.99, battery: 8, rating: 4.0 },
  { name: "Sound Flow Lite", price: 59.99, battery: 10, rating: 4.2 },
  { name: "Audio Max Pro", price: 79.99, battery: 12, rating: 4.5 },
  { name: "HarmoniX Sport", price: 99.99, battery: 16, rating: 4.8 },
];

// Task 1: Filter earbuds with battery life over 10 hours
const longBatteryEarbuds = earbuds.filter((earbud) => earbud.battery > 10);
console.log("Earbuds with battery life over 10 hours:", longBatteryEarbuds);

// Task 2: Create an array of product names
const earbudNames = earbuds.map((earbud) => earbud.name);
console.log("Earbud names:", earbudNames);

// Task 3: Find the average rating
const averageRating =
  earbuds.reduce((sum, earbud) => sum + earbud.rating, 0) / earbuds.length;
console.log("Average rating of earbuds:", averageRating.toFixed(2));

// Task 4: Sort earbuds by price in ascending order
const sortedEarbuds = [...earbuds].sort((a, b) => a.price - b.price);
console.log("Earbuds sorted by price:", sortedEarbuds);

// Task 5: Find the most expensive earbud
const mostExpensiveErbud = earbuds.reduce(
  (max, earbud) => (earbud.price > max.price ? earbud : max),
  earbuds[0]
);
console.log("Most expensive earbud:", mostExpensiveErbud);

// Task 6: Check if all earbuds have a rating above 4.0
const allAboveFour = earbuds.every((earbud) => earbud.rating > 4.0);
console.log("All earbuds have a rating above 4.0:", allAboveFour);

// Task 7: Find the first earbud with a rating of 4.5 or higher
const firstHighRatedErbud = earbuds.find((earbud) => earbud.rating >= 4.5);
console.log(
  "First earbud with a rating of 4.5 or higher:",
  firstHighRatedErbud
);

// Task 8: Count how many earbuds are priced below $60
const bellowSixtyCount = earbuds.filter((earbud) => earbud.price < 60).length;
console.log("Number of earbuds priced below $60:", bellowSixtyCount);

// Task 9: Create a new array with the price of each earbud increased by 10%
const increaseprice = earbuds.map((earbud) => ({
  ...earbud,
  price: (earbud.price * 1.1).toFixed(2),
}));
console.log("Earbuds with price increased by 10%:", increaseprice);

// Task 10: Find the index of the earbud named "Audio Max Pro"
const audioMaxIndex = earbuds.findIndex(
  (earbud) => earbud.name === "Audio Max Pro"
);
console.log("Index of 'Audio Max Pro':", audioMaxIndex);

// Task 11: Create a string of all earbud names separated by commas
const allErbudsNames = earbuds.map((earbud) => earbud.name).join(", ");
console.log("All earbud names as a string:", allErbudsNames);

// Task 12: Check if there is any earbud with a battery life of 15 hours or more
const batteryHour15Plus = earbuds.some((earbud) => earbud.battery >= 15);
console.log(
  "Is there any earbud with a battery life of 15 hours or more?",
  batteryHour15Plus
);

// Task 13: Create an object with the total price and average battery life of all earbuds
const totalPrice = earbuds.reduce((sum, earbud) => sum + earbud.price, 0);
const averageBatteryLife =
  earbuds.reduce((sum, earbud) => sum + earbud.battery, 0) / earbuds.length;
const earbudsSummary = {
  totalPrice: totalPrice.toFixed(2),
  averageBatteryLife: averageBatteryLife.toFixed(2),
};
console.log("Earbuds summary:", earbudsSummary);

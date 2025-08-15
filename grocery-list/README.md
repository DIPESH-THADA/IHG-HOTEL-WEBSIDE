# 🛒 Real-Life Array Challenge: Grocery List Manager

🧠 Scenario
You're building a simple grocery list app. Users can add items, remove items, mark items as bought, and sort them. Your task is to implement the core logic using arrays.

- Requirements

Create a JavaScript program that manages a grocery list with the following features:

1. Add Items

- Function: addItem(list, item)
- Adds a new item to the list.
- Prevents duplicates (case-insensitive).

\*2. Remove Items

- Function: removeItem(list, item)
- Removes an item from the list.
- If the item doesn’t exist, return a message.

\*3. Mark as Bought

- Function: markAsBought(list, item)
- Marks an item as bought.

- Store items as objects: { name: "Milk", bought: true }

\*4. Sort List

- Function: sortList(list)
- Sorts items alphabetically by name.

\*5. Show Unbought Items

- Function: getPendingItems(list)
- Returns only items that haven’t been bought.

🧪 Bonus Challenges

- ✅ Save the list to localStorage and retrieve it.
- 🧼 Clean up user input (trim whitespace, normalize case).
- 📦 Add a quantity field: { name: "Eggs", quantity: 12, bought: false }
- 📊 Display a summary: total items, bought items, pending items.

🧑‍💻 Starter Code Template
let groceryList = [];

function addItem(list, itemName) {
// Your code here
}

function removeItem(list, itemName) {
// Your code here
}

function markAsBought(list, itemName) {
// Your code here
}

function sortList(list) {
// Your code here
}

function getPendingItems(list) {
// Your code here
}



Want me to walk through the solution with you or add a UI layer next? Or maybe you'd like a different challenge—like something with arrays and APIs or game logic?

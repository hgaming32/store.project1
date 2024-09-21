// Array to store grocery items (name and price in KES)
const groceries = [
    {
        name: prompt("Enter the first grocery item:"),
        price: parseFloat(prompt("Enter the price of the first item (KES):")) // Convert input to number
    }, 
    {
        name: prompt("Enter the second grocery item:"),
        price: parseFloat(prompt("Enter the price of the second item (KES):"))
    }, 
    {
        name: prompt("Enter the third grocery item:"),
        price: parseFloat(prompt("Enter the price of the third item (KES):"))
    }
];

// Get the total amount of money the user has in KES
const userMoney = parseFloat(prompt("How much money do you have (KES)?"));

// Function to calculate the total cost of groceries in KES
const calculateTotalCost = (items) => {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        totalCost += items[i].price; // Add each item's price to the total
    }
    return totalCost;
};

// Calculate the remaining money (change) after purchasing groceries
const remainingMoney = userMoney - calculateTotalCost(groceries);

// Display the remaining money (change) in Kenyan Shillings (KES) using an alert
if (remainingMoney >= 0) {
    alert(`Thank you! Your change is KES ${remainingMoney.toFixed(2)}.`); // Show the change in an alert
} else {
    alert(`You don't have enough money. You are short by KES ${Math.abs(remainingMoney).toFixed(2)}.`); // Show how much more is needed
}
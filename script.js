function calculatePrice() {
    // Get the input values
    const price = parseFloat(document.getElementById("price").value);
    const weightGiven = parseFloat(document.getElementById("weight").value);
    const newWeight = parseFloat(document.getElementById("new-weight").value);
  
    // Check if all inputs are valid numbers
    if (isNaN(price) || isNaN(weightGiven) || isNaN(newWeight) || price <= 0 || weightGiven <= 0 || newWeight <= 0) {
      document.getElementById("result").textContent = "Please enter valid positive numbers!";
      return;
    }
  
    // Calculate price per gram
    const pricePerGram = price / weightGiven;
  
    // Calculate the new cost for the new weight
    const newCost = pricePerGram * newWeight;
  
    // Display the result
    document.getElementById("result").textContent = `The price for ${newWeight} grams is: ₹${newCost.toFixed(2)}`;
  }
  
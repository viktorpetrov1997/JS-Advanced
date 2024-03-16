function calculateMoneyNeeded(fruit, weightInGrams, pricePerKg) 
{
    // Convert weight from grams to kilograms
    const weightInKg = weightInGrams / 1000;

    // Calculate the total money needed
    const money = (weightInKg * pricePerKg).toFixed(2); // Round to two decimal places

    // Print the result
    console.log(`I need $${money} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateMoneyNeeded('orange', 2500, 1.80);

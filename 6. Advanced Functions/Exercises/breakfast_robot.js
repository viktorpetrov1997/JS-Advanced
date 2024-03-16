function manageOrders() 
{
    let storage = new Map();

    const recipes = [
        { name: "apple", ingredients: { "carbohydrate": 1, "flavour": 2 } },
        { name: "lemonade", ingredients: { "carbohydrate": 10, "flavour": 20 } },
        { name: "burger", ingredients: { "carbohydrate": 5, "fat": 7, "flavour": 3 } },
        { name: "eggs", ingredients: { "protein": 5, "fat": 1, "flavour": 1 } },
        { name: "turkey", ingredients: { "protein": 10, "carbohydrate": 10, "fat": 10, "flavour": 10 } }
    ];

    return function(order) 
    {
        let [action, ingredient, quantity] = order.split(" ");
        if (action == "restock") 
        {
            if(!storage.has(ingredient)) 
            {
                storage.set(ingredient, parseInt(quantity));
            } 
            else 
            {
                storage.set(ingredient, storage.get(ingredient) + parseInt(quantity));
            }
            return "Success";
        } 
        else if (action == "prepare") 
        {
            const recipeName = ingredient;
            const recipeQuantity = parseInt(quantity);
            const recipe = recipes.find(recipe => recipe.name === recipeName);

            const recipeIngredients = recipe.ingredients;
            for(const [recipeIngredient, requiredQuantity] of Object.entries(recipeIngredients)) 
            {
                if(!storage.has(recipeIngredient) || storage.get(recipeIngredient) < requiredQuantity * recipeQuantity) 
                {
                    return `Error: not enough ${recipeIngredient} in stock`;
                }
            }

            for(const [ingredient, requiredQuantity] of Object.entries(recipeIngredients)) 
            {
                storage.set(ingredient, storage.get(ingredient) - requiredQuantity * recipeQuantity);
            }
            return "Success";
        } 
        else 
        {
            return `protein=${storage.get('protein') || 0} carbohydrate=${storage.get('carbohydrate') || 0} fat=${storage.get('fat') || 0} flavour=${storage.get('flavour') || 0}`;
        }
    }
}

let manager = manageOrders();
console.log(manager("restock flavour 50")); 
console.log(manager("prepare lemonade 4"));

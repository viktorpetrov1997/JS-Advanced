function calculateNumberOfJuiceBottles(arrayOfStrings)
{
    let juicesQuantity = new Map();
    let bottles = new Set();

    for(let i = 0; i < arrayOfStrings.length; i++)
    {
        let [juice, quantity] = arrayOfStrings[i].split(" => ");
        quantity = parseInt(quantity);

        if(!juicesQuantity.has(juice))
        {
            juicesQuantity.set(juice, quantity);
        }
        else
        {
            juicesQuantity.set(juice, juicesQuantity.get(juice) + quantity);
        }

        if(juicesQuantity.get(juice) >= 1000 && !bottles.has(juice)) 
        {
            bottles.add(juice);
        }
    }

    for(let juice of bottles) 
    {
        let bottlesCount = Math.floor(juicesQuantity.get(juice) / 1000);
        console.log(`${juice} => ${bottlesCount}`);
        let remainingQuantity = juicesQuantity.get(juice) % 1000;
        juicesQuantity.set(juice, remainingQuantity);
    }
}

let array = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'];

calculateNumberOfJuiceBottles(array);
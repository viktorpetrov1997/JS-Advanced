function findLowestPrices(arrayOfStrings) 
{
    let pricesMap = new Map();

    for(let i = 0; i < arrayOfStrings.length; i++)
    {
        let [town, product, price] = arrayOfStrings[i].split(' | ');
        let currentPrice = parseFloat(price);

        if(pricesMap.has(product))
        {
            let [lowestPrice, lowestTown] = pricesMap.get(product);
            if(currentPrice < lowestPrice) 
            {
                pricesMap.set(product, [currentPrice, town]);
            }
        }
        else 
        {
            pricesMap.set(product, [currentPrice, town]);
        }
    }

    pricesMap.forEach((value, key) => {
        const [lowestPrice, town] = value;
        console.log(`${key} -> ${lowestPrice} (${town})`);
    });
}

const input = ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'];

findLowestPrices(input);

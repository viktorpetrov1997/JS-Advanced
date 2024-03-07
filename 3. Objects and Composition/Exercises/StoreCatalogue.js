function sortStoreCatalogue(storeCatalogue)
{
    const sortedCatalogue = storeCatalogue.sort((nameA, nameB) =>
        nameA.localeCompare(nameB)
    );

    let currentGroupInitial = '';
    for(let i = 0; i < storeCatalogue.length; i++)
    {
        let [product, price] = sortedCatalogue[i].split(' : ');
        price = Number(price);
        let groupInitial = product.charAt(0);

        if(groupInitial !== currentGroupInitial) 
        {
            console.log(groupInitial);
            currentGroupInitial = groupInitial;
        }

        console.log("  " + product + ": " + price);
    }
}

let storeCatalogue =  ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'];

sortStoreCatalogue(storeCatalogue);
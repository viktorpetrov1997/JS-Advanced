function createCarRegister(arrayOfStrings)
{
    let brands = new Map();

    for(let i = 0; i < arrayOfStrings.length; i++)
    {
        let [carBrand, carModel, producedCars] = arrayOfStrings[i].split(" | ");
        producedCars = parseInt(producedCars);

        if(!brands.has(carBrand)) 
        {
            brands.set(carBrand, new Map([[carModel, producedCars]]));
        } 
        else 
        {
            let models = brands.get(carBrand);
            if(models.has(carModel)) 
            {
                models.set(carModel, models.get(carModel) + producedCars);
            }
            else 
            {
                models.set(carModel, producedCars);
            }
        }
    }

    for(const [brand, models] of brands) 
    {
        console.log(brand);
        for(const [model, producedCars] of models) 
        {
            console.log(`###${model} -> ${producedCars}`);
        }
    }
}

let array = ['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'];

createCarRegister(array);

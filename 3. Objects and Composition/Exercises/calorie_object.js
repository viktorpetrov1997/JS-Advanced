function composeObject(inputArray) 
{
    let object = {};

    for (let i = 0; i < inputArray.length; i += 2) 
    {
        let food = inputArray[i];
        let calories = Number(inputArray[i + 1]);
        object[food] = calories;
    }

    console.log(object);
}

let arrayOfStrings =  ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];

composeObject(arrayOfStrings);


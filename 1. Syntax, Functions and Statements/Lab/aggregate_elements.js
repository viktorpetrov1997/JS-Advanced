function aggregateElements(array)
{
    let sum = 0;

    for(let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    console.log(sum);

    let inverseSum = 0;

    for(let i = 0; i < array.length; i++)
    {
        inverseSum += 1 / array[i];
    }

    console.log(inverseSum);

    let concatenatedString = '';
    for (let i = 0; i < array.length; i++) {
        concatenatedString += String(array[i]);
    }
    console.log(concatenatedString);
}

let inputArray = [1, 2, 3];
aggregateElements(inputArray)
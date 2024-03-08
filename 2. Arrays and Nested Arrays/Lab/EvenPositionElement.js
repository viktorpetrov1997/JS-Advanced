function getElementsAtEvenPosition(array)
{
    let result = " ";
    for(let i = 0; i < array.length; i += 2)
    {
        result += array[i];
        result += " ";
    }
    console.log(result);
}

let array = [20, 30, 40, 50, 60];

getElementsAtEvenPosition(array);
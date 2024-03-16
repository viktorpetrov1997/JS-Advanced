function sumArrayElements(array, startIndex, endIndex)
{
    if(!Array.isArray(array))
    {
        return NaN;
    }

    startIndex = Math.max(startIndex, 0);

    endIndex = Math.min(endIndex, array.length - 1);

    let sum = 0;

    for(let i = startIndex; i <= endIndex; i++)
    {
        let currentNumber = Number(array[i]);
        if(!isNaN(currentNumber))
        {
            sum += currentNumber;
        }
        else
        {
            return NaN;
        }
    }

    return sum;
}

console.log(sumArrayElements([10, 20, 30, 40, 50, 60], 3, 300));
function negativePositiveNumbers(array)
{
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] < 0)
        {
            newArray.unshift(array[i]);
        }
        else
        {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let array = [7, -2, 8, 9];

let newArray = negativePositiveNumbers(array);

for(let i = 0; i < newArray.length; i++)
{
    console.log(newArray[i]);
}
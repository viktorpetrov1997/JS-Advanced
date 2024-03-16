function printNthElementFromArray(array, step)
{
    let result = [];
    for(let i = 0; i < array.length; i+= step)
    {
        result.push(array[i]);
    }
    return result;
}

let array = ['5','20','31','4','20'];

console.log(printNthElementFromArray(array,2));
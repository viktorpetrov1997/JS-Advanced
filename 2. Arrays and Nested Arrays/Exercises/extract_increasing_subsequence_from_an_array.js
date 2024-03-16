function extractIncreasingSubsequenceFromArray(array)
{
    let nonDecreasingSubset = [array[0]]; 
    let currentMax = array[0];

    for(let i = 1; i < array.length; i++)
    {
        if(array[i] >= currentMax)
        {
            nonDecreasingSubset.push(array[i]);
            currentMax = array[i];
        }
    }

    return nonDecreasingSubset;
}

const numbers = [1, 3, 8, 4, 10, 12, 3, 2, 24];

console.log(extractIncreasingSubsequenceFromArray(numbers));
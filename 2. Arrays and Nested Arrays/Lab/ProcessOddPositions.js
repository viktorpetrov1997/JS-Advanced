function getOddPositions(array)
{
    let result = [];
    for(let i = 0; i < array.length; i++)
    {
        if(i % 2 != 0)
        {
            result.unshift(array[i] * 2);
        }
    }
    return result;
}

/*

function getOddPositionsSecondWay(arr)
{
return arr.filter((a, i) => i % 2 !== 0)
.map(x => x * 2)
.reverse()
.join(' ');
}


*/

let array = [10, 15, 20, 25];

console.log(getOddPositions(array));
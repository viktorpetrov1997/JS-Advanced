function sumFirstAndLastElement(array)
{
    let firstElement = Number(array[0]);
    let secondElement = Number(array[array.length - 1]);

    return firstElement + secondElement;
}

/*

function secondSolution(arr) 
{
return Number(arr.pop()) + Number(arr.shift());
}

*/

let array = ['20', '30', '40'];

console.log(sumFirstAndLastElement(array));
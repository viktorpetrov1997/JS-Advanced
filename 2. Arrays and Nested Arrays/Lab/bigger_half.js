function getBiggerHalf(array)
{
    array.sort((a, b) => a - b);

    let middle = Math.floor(array.length / 2);
    let newArray = array.slice(middle);

    return newArray;
}

let array = [3, 19, 14, 7, 2, 19, 6];

console.log(getBiggerHalf(array));
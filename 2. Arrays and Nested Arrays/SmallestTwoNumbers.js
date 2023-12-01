function getTwoSmallestNumbers(array)
{
    array.sort((a, b) => a - b);

    console.log(array[0] + " " + array[1]);
}

let array = [30, 15, 50, 5];
getTwoSmallestNumbers(array);
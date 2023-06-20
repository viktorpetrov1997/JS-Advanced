function stringLength(firstString, secondString, thirdString)
{
    let stringsTotalLength = firstString.length + secondString.length + thirdString.length;
    let averageStringsLength = Math.floor(stringsTotalLength / 3);

    console.log(stringsTotalLength);
    console.log(averageStringsLength);
}

stringLength('chocolate','ice cream','cake');
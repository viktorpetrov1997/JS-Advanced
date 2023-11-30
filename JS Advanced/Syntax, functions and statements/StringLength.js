function stringLength(firstString, secondString, thirdString)
{
    let stringLengthSum = firstString.length + secondString.length + thirdString.length;
    let averageLength = Math.round(stringLengthSum / 3);
    
    console.log(stringLengthSum);
    console.log(averageLength)
}

stringLength('chocolate', 'ice cream', 'cake');
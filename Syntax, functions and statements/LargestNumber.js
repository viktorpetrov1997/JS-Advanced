function largestNumber(firstNumber, secondNumber, thirdNumber)
{
    let largestNumber;

    if(firstNumber > secondNumber && secondNumber > thirdNumber)
    {
        largestNumber = firstNumber;
    }
    else if(secondNumber > firstNumber && secondNumber > thirdNumber)
    {
        largestNumber = secondNumber;
    }
    else if(thirdNumber > firstNumber && thirdNumber > secondNumber)
    {
        largestNumber = thirdNumber;
    }

    //console.log("The largest number is " + largestNumber + "."); 
    console.log(`The largest number is ${largestNumber}.`);
}

largestNumber(5,-3,16);
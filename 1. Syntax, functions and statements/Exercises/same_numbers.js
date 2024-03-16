function checkIfDigitsAreTheSameAndPrintSum(number)
{
    let sumOfDigits = 0;
    let allSame = true;
    let firstDigit = number % 10;
    
    while(number != 0)
    {
        let digit = number % 10;
        if(digit != firstDigit)
        {
            allSame = false;
        }
        sumOfDigits += digit;
        number = Math.floor(number / 10);
    }

    console.log(allSame);
    console.log(sumOfDigits);
}

checkIfDigitsAreTheSameAndPrintSum(2222222);
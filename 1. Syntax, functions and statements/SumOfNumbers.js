function sumOfNumbersInRange(frstNumber, secondNumber)
{
    let startNumber = Number(frstNumber);
    let endNumber = Number(secondNumber);
    
    let result = 0;

    for(let i = startNumber; i <= endNumber; i++)
    {
        result += i;
    }

    console.log(result);
}

sumOfNumbersInRange('1','5');
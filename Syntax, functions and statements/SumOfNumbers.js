function sumOfNumbers(n,m)
{
    let firstNumber = Number(n);
    let secondNumber = Number(m);

    let result = 0;

    for(let i = firstNumber; i <= secondNumber; i++)
    {
        result += i;
    }

    return result;
}

console.log(sumOfNumbers('1','5'));
function calc() 
{
    let firstNumber = parseFloat(document.getElementById('num1').value) || 0;
    let secondNumber = parseFloat(document.getElementById('num2').value) || 0;

    let sum = firstNumber + secondNumber;

    document.getElementById('sum').value = sum;
}
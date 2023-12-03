function calcSum() 
{
    let num1 = document.getElementsByName('num1')[0].value;
    let num2 = document.getElementsByName('num2')[0].value;
    let sum = Number(num1) + Number(num2);
    document.getElementsByName('sum')[0].value = sum;
}
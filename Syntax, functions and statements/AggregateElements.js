function performOperations(array) 
{
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
  
    const inverseSum = array.reduce((accumulator, currentValue) => accumulator + 1 / currentValue, 0);
    console.log(inverseSum);

    const concat = array.join('');
    console.log(concat);
}

const array = [1, 2, 3, 4, 5];
performOperations(array);
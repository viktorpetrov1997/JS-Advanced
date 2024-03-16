function getFibonacci() 
{
    let n1 = 1;
    let n2 = 1;

    return function() 
    {
        const nextNumber = n1; 
        n1 = n2; 
        n2 = nextNumber + n2; 
        return nextNumber;
    };
}


let fib = getFibonacci();
console.log(fib());
console.log(fib());
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
console.log(fib()); 
function solution(initialNumber) 
{
    return function(additionalNumber) 
    {
        return initialNumber + additionalNumber;
    };
}

let add5 = solution(5);
console.log(add5(2)); 
console.log(add5(3)); 
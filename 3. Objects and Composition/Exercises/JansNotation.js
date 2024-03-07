function calculatePostfix(inputInstructions) 
{
    const stack = [];

    for(let token of inputInstructions) 
    {
        if(!isNaN(token)) 
        {
            stack.push(parseFloat(token));
        } 
        else 
        {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            if(operand1 === undefined || operand2 === undefined) 
            {
                return "Error: not enough operands!";
            }
            switch(token) 
            {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    if (operand2 === 0) 
                    {
                        return "Error: division by zero!";
                    }
                    stack.push(operand1 / operand2);
                    break;
                default:
                    return "Error: invalid token!";
            }
        }
    }

    if(stack.length !== 1) 
    {
        return "Error: too many operands!";
    }

    return stack.pop();
}

const inputInstructions = [5,3,4,'*','-'];
console.log(calculatePostfix(inputInstructions)); 

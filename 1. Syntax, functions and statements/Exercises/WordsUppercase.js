function extractAndConvertToUpperCase(inputString) 
{
    const pattern = /\w+/g;

    const result = inputString.match(pattern).join(", ").toUpperCase();

    return result;
}

console.log(extractAndConvertToUpperCase('Hi, how are you?'));
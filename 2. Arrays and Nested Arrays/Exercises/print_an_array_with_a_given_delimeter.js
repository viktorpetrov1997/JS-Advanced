function printWithDelimiter(array, delimiter)
{
    const output = array.join(delimiter);
    console.log(output);
}

const array = ['One','Two','Three','Four','Five'];

printWithDelimiter(array,'-');
function getBiggestElement(matrix)
{
    let largestElement = matrix[0][0];

    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[i].length; j++)
        {
            if(matrix[i][j] > largestElement)
            {
                largestElement = matrix[i][j];
            }
        }
    }
    return largestElement;
}

let matrix = [[20, 50, 10],
             [8, 33, 145]];


console.log(getBiggestElement(matrix));

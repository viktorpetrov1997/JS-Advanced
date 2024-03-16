function isMagicalMatrix(matrix) 
{
    // Calculate the sum of the first row to use as a reference
    let referenceSum = 0;
    for (let i = 0; i < matrix[0].length; i++) 
    {
        referenceSum += matrix[0][i];
    }

    // Check the sums of each row
    for (let row = 1; row < matrix.length; row++) 
    {
        let rowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) 
        {
            rowSum += matrix[row][col];
        }
        if (rowSum !== referenceSum) 
        {
            return false; // If any row sum is not equal to the reference sum, the matrix is not magical
        }
    }

    // Check the sums of each column
    for (let col = 0; col < matrix[0].length; col++) 
    {
        let columnSum = 0;
        for (let row = 0; row < matrix.length; row++) 
        {
            columnSum += matrix[row][col];
        }
        if (columnSum !== referenceSum) 
        {
            return false; // If any column sum is not equal to the reference sum, the matrix is not magical
        }
    }

    return true; // If all row sums and column sums are equal, the matrix is magical
}

const matrix = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
];
console.log(isMagicalMatrix(matrix));

function generateSpiralMatrix(rows, cols) 
{
    // Initialize the matrix with zeros
    const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    let num = 1;
    let startRow = 0, endRow = rows - 1;
    let startCol = 0, endCol = cols - 1;

    while (num <= rows * cols) 
    {
        // Fill top row
        for (let i = startCol; i <= endCol; i++) 
        {
            matrix[startRow][i] = num++;
        }
        startRow++;

        // Fill right column
        for (let i = startRow; i <= endRow; i++) 
        {
            matrix[i][endCol] = num++;
        }
        endCol--;

        // Fill bottom row
        for (let i = endCol; i >= startCol; i--) 
        {
            matrix[endRow][i] = num++;
        }
        endRow--;

        // Fill left column
        for (let i = endRow; i >= startRow; i--) 
        {
            matrix[i][startCol] = num++;
        }
        startCol++;
    }

    // Print the matrix
    matrix.forEach(row => console.log(row.join(' ')));
}

generateSpiralMatrix(5, 5);

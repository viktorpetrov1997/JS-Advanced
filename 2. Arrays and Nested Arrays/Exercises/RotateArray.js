function rotateArray(array, rotations)
{
    const length = array.length;
    const actualRotations = rotations % length;

    for (let i = 0; i < actualRotations; i++) 
    {
        const lastElement = array.pop(); 
        array.unshift(lastElement); 
    }

    return array.join(' ');
}

const array = ['1', '2', '3', '4'];

console.log(rotateArray(array,2));
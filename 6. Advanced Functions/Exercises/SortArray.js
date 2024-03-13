function sortArray(arr, order) 
{
    if(order === "asc") 
    {
        return arr.slice().sort((a, b) => a - b); //Using the slice method allows us to preserve 
        //the original array that was passed in without changing it. If we want to change it we need to
        //remove the slice method.
    } 
    else if(order === "desc") 
    {
        return arr.slice().sort((a, b) => b - a);
    } 
}

let array = [14, 7, 17, 6, 8];

console.log(sortArray(array,"asc"));
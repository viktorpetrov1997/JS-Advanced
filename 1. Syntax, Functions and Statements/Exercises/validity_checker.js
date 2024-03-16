function checkPointValidity(x1, y1, x2, y2) 
{
    function isValidDistance(x1, y1, x2, y2) 
    {
        // Calculate the distance using the distance formula
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        // Check if the distance is an integer
        return Number.isInteger(distance);
    }

    const isValidPoint1 = isValidDistance(x1, y1, 0, 0);
    const isValidPoint2 = isValidDistance(x2, y2, 0, 0);
    const isValidDistanceBetweenPoints = isValidDistance(x1, y1, x2, y2);

    if (isValidPoint1) 
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } 
    else 
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(isValidPoint2) 
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } 
    else 
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(isValidDistanceBetweenPoints) 
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } 
    else 
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

checkPointValidity(2, 1, 1, 1); 
                              
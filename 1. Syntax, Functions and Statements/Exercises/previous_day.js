function getPreviousDay(year, month, day) 
{
    // Create a new Date object for the given date
    let date = new Date(year, month - 1, day); // Note: Month is 0-indexed in JavaScript

    // Decrement the day by 1 to get the previous day
    date.setDate(date.getDate() - 1);

    // Extract year, month, and day from the updated date object
    const prevYear = date.getFullYear();
    const prevMonth = date.getMonth() + 1; // Adding 1 because months are zero-indexed
    const prevDay = date.getDate();

    // Format the result
    const formattedPrevDay = `${prevYear}-${prevMonth}-${prevDay}`;

    return formattedPrevDay;
}

console.log(getPreviousDay(2015, 5, 10)); 
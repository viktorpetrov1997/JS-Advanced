function getDaysInMonth(month, year)
{
    let date = new Date(year, month);

    date.setDate(0);

    return date.getDate();
}

console.log(getDaysInMonth(1,2012));
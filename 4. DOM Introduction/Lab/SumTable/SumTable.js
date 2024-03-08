function sumTable()
{
    let rows = document.querySelectorAll('table tbody tr');

    let total = 0;

    for(let i = 1; i < rows.length - 1; i++)
    {
        let costCell = rows[i].querySelector('td:nth-child(2)');
        let costValue = parseFloat(costCell.textContent);
        total += costValue;
    }

    document.getElementById('sum').textContent = total.toFixed(2);
}
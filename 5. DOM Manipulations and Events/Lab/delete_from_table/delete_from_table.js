function deleteByEmail()
{
    let input = document.getElementsByName("email")[0].value;
    let emails = document.querySelectorAll("#customers tr td:nth-child(2)");

    for(let td of emails)
    {
        if(td.textContent == input)
        {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            return;
        }
    }

    document.getElementById('result').textContent = "Not found.";
}
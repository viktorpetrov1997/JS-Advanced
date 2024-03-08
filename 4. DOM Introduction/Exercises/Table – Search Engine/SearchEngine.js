function solve() 
{
    const searchButton = document.getElementById('searchBtn');
    searchButton.addEventListener('click', highlightRow);

    let rows = document.querySelectorAll("tbody tr");

    function highlightRow()
    {
        let inputValueToLower = document.getElementById('searchField').value.toLowerCase();

        for(let row of rows)
        {
            let rowTextToLower = row.textContent.toLowerCase();

            if(rowTextToLower.includes(inputValueToLower))
            {
                row.setAttribute("class","select");
            }
            else
            {
                row.removeAttribute("class");
            }
        }
    }
}
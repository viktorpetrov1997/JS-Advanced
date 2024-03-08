function searchForElementAndShowOccurrences() 
{
    let listItems = document.querySelectorAll("#towns li");
    let inputValue = document.querySelector("input").value;
    let result = document.getElementById("result");

    let countOccurrences = 0;

    for(let li of listItems)
    {
        let inputToLower = inputValue.toLowerCase();
        let liTextToLower = li.textContent.toLowerCase();

        if(liTextToLower.includes(inputToLower))
        {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            ++countOccurrences;
        }
        else
        {
            li.style.fontWeight = "";
            li.style.textDecoration = "";
        }
    }

    result.textContent = `${countOccurrences} matches found`;
}

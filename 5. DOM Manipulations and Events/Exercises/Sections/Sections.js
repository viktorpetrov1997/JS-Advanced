function createSections(arrayOfStrings)
{
    let content = document.getElementById("content");

    for(let i = 0; i < arrayOfStrings.length; i++)
    {
        let div = document.createElement("div");

        let paragraph = document.createElement("p");
        paragraph.textContent = arrayOfStrings[i];
        paragraph.style.display = "none";

        div.addEventListener("click", function()
        {
            paragraph.style.display = "block";
        });

        div.appendChild(paragraph);
        content.appendChild(div);
    }
}
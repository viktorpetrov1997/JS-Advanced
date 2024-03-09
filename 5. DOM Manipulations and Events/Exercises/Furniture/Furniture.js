function solve()
{
    let firstTextArea = document.getElementsByTagName("textarea")[0];
    let secondTextArea = document.getElementsByTagName("textarea")[1];

    let generateButton = document.getElementsByTagName("button")[0];
    let buyButton = document.getElementsByTagName("button")[1];


    generateButton.addEventListener("click", function()
    {
        let inputArray = JSON.parse(firstTextArea.value);

        let tableBody = document.getElementsByTagName("tbody")[0];

        for(let i = 0; i < inputArray.length; i++)
        {
            let tr = document.createElement("tr");
            
            let tdImage = document.createElement("td");
            let img = document.createElement("img");
            img.src = inputArray[i].img;
            tdImage.appendChild(img);
            
            let tdName = document.createElement("td");
            let tdNameParagraph = document.createElement("p");
            tdNameParagraph.textContent = inputArray[i].name;
            tdName.appendChild(tdNameParagraph);
            
            let tdPrice = document.createElement("td");
            let tdPriceParagraph = document.createElement("p");
            tdPriceParagraph.textContent = inputArray[i].price;
            tdPrice.appendChild(tdPriceParagraph);
            
            let tdDecorationFactor = document.createElement("td");
            let tdDecorationFactorParagraph = document.createElement("p");
            tdDecorationFactorParagraph.textContent = inputArray[i].decFactor;
            tdDecorationFactor.appendChild(tdDecorationFactorParagraph);

            let tdCheckbox = document.createElement("td");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            tdCheckbox.appendChild(checkbox);
            
            tr.appendChild(tdImage);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDecorationFactor);
            tr.appendChild(tdCheckbox);
            
            tableBody.appendChild(tr);
        }
    });

    buyButton.addEventListener("click", function() 
    {
        let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

        if(checkboxes.length === 0) 
        {
            secondTextArea.value = '';
            return;
        }

        let checkedNames = new Set();

        let totalPrice = 0;
        let totalDecorationFactor = 0;

        checkboxes.forEach(function(checkbox) 
        {
            let row = checkbox.closest("tr");
            let nameElement = row.querySelector("td:nth-child(2) p");
            let name = nameElement.textContent.trim();
            checkedNames.add(name);

            let price = parseFloat(row.querySelector("td:nth-child(3) p").textContent);
            totalPrice += price;

            let decorationFactor = parseFloat(row.querySelector("td:nth-child(4) p").textContent);
            totalDecorationFactor += decorationFactor;
        });

        let furnitureArray = Array.from(checkedNames).join(", ");

        let averageDecorationFactor = totalDecorationFactor / checkboxes.length;

        let secondTextAreaOutput = `Bought furniture: ${furnitureArray}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`;
        secondTextArea.value = secondTextAreaOutput;
    });
}
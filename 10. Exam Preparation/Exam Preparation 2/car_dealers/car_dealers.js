window.addEventListener("load", manageCarDeals);

function manageCarDeals() 
{
    let publishButton = document.getElementById("publish");

    let totalProfit = 0;

    publishButton.addEventListener("click", function (e) 
    {
        e.preventDefault();

        let makeInput = document.getElementById("make").value;
        let modelInput = document.getElementById("model").value;
        let yearInput = document.getElementById("year").value;

        let selectElement = document.getElementById("fuel");
        let selectedIndex = selectElement.selectedIndex;
        let selectedValue = selectElement.options[selectedIndex].value;

        let originalCost = parseFloat(document.getElementById("original-cost").value);
        let sellingPrice = parseFloat(document.getElementById("selling-price").value);

        if (makeInput !== "" && modelInput !== "" && yearInput !== "" && selectedValue != ""
           && sellingPrice > originalCost) 
           {
            let tbody = document.getElementById("table-body");

            let tr = document.createElement("tr");

            let tdMake = document.createElement("td");
            tdMake.textContent = makeInput;

            let tdModel = document.createElement("td");
            tdModel.textContent = modelInput;

            let tdYear = document.createElement("td");
            tdYear.textContent = yearInput;

            let tdFuel = document.createElement("td");
            tdFuel.textContent = selectedValue;

            let tdOriginalCost = document.createElement("td");
            tdOriginalCost.textContent = originalCost;

            let tdSellingPrice = document.createElement("td");
            tdSellingPrice.textContent = sellingPrice;

            let tdButton = document.createElement("td");
            let editButton = document.createElement("button");
            editButton.textContent = "Edit"

            let sellButton = document.createElement("button");
            sellButton.textContent = "Sell";

            editButton.classList.add('action-btn', 'edit');
            sellButton.classList.add('action-btn', 'sell');

            tdButton.appendChild(editButton);
            tdButton.appendChild(sellButton);

            tr.appendChild(tdMake);
            tr.appendChild(tdModel);
            tr.appendChild(tdYear);
            tr.appendChild(tdFuel);
            tr.appendChild(tdOriginalCost);
            tr.appendChild(tdSellingPrice);

            tr.appendChild(tdButton);

            tbody.appendChild(tr);

            editButton.addEventListener("click", function() 
            {
                // Populate input fields with the values from this row
                document.getElementById("make").value = makeInput;
                document.getElementById("model").value = modelInput;
                document.getElementById("year").value = yearInput;
                document.getElementById("fuel").value = selectedValue;
                document.getElementById("original-cost").value = originalCost;
                document.getElementById("selling-price").value = sellingPrice;

                // Delete the row from the table body
                tr.remove();
            });

            sellButton.addEventListener("click", function()
            {
                let soldCars = document.getElementById("cars-list");

                let li = document.createElement("li");
                li.classList.add("each-list");

                let firstSpan = document.createElement("span");
                firstSpan.textContent = `${makeInput} ${modelInput}`;

                let secondSpan = document.createElement("span");
                secondSpan.textContent = yearInput;

                let thirdSpan = document.createElement("span");
                thirdSpan.textContent = sellingPrice - originalCost;

                let profit = sellingPrice - originalCost; 
                totalProfit += profit;

                li.appendChild(firstSpan);
                li.appendChild(secondSpan);
                li.appendChild(thirdSpan);

                soldCars.appendChild(li);

                let profitMade = document.getElementById("profit");
                profitMade.textContent = totalProfit.toFixed(2);
                
                tr.remove();
            });

            document.getElementById("make").value = "";
            document.getElementById("model").value = "";
            document.getElementById("year").value = "";
            document.getElementById("fuel").selectedIndex = 0;
            document.getElementById("original-cost").value = "";
            document.getElementById("selling-price").value = "";
        }
    });
}
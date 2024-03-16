function manageCinema() 
{
    const addButton = document.querySelector('#add-new button');
    const nameInput = document.querySelector('#add-new input:nth-of-type(1)');
    const hallInput = document.querySelector('#add-new input:nth-of-type(2)');
    const priceInput = document.querySelector('#add-new input:nth-of-type(3)');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    addButton.addEventListener('click', function (event) 
    {
        event.preventDefault();

        const name = nameInput.value.trim();
        const hall = hallInput.value.trim();
        const price = parseFloat(priceInput.value);

        if(name && hall && !isNaN(price)) 
        {
            const listItem = document.createElement('li');
            const span = document.createElement('span');
            const strongHall = document.createElement('strong');
            const div = document.createElement('div');
            const strongPrice = document.createElement('strong');
            const ticketSold = document.createElement('input');
            const archiveButton = document.createElement('button');
            
            listItem.appendChild(span);
            span.textContent = name;

            listItem.appendChild(strongHall);
            strongHall.textContent = `Hall: ${hall}`;

            listItem.appendChild(div);

            strongPrice.textContent = price.toFixed(2);
            div.appendChild(strongPrice);

            ticketSold.setAttribute('type', 'text');
            ticketSold.setAttribute('placeholder', 'Tickets Sold');
            div.appendChild(ticketSold);

            archiveButton.textContent = 'Archive';
            div.appendChild(archiveButton);

            moviesList.appendChild(listItem);
            
            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
            
            archiveButton.addEventListener('click', function () 
            {
                let ticketsSold = parseInt(ticketSold.value);
                if(!isNaN(ticketsSold))
                {
                    let totalProfit = price * ticketsSold;

                    let li = document.createElement("li");

                    const span = document.createElement('span');
                    span.textContent = name;

                    const strong = document.createElement('strong');
                    strong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = "Delete";

                    li.appendChild(span);
                    li.appendChild(strong);
                    li.appendChild(deleteButton);

                    archiveList.appendChild(li);

                    deleteButton.addEventListener("click", function()
                    {
                        this.parentNode.remove();
                    });
                }
            });
        }
    });

    clearButton.addEventListener("click", function()
    {
        const archiveListItems = document.querySelectorAll('#archive ul li');
        archiveListItems.forEach(item => {
            item.remove();
        });
    });
}


function ticket_rift_rock()
{
    let purchaseTicketsButton = document.getElementById("purchase-btn");

    purchaseTicketsButton.addEventListener("click", function() 
    {
        let numTickets = document.getElementById('num-tickets').value;
        let seatingPreference = document.getElementById('seating-preference').value;
        let fullName = document.getElementById('full-name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone-number').value;

        if(numTickets !== "" && seatingPreference !== "" && fullName !== "" && email !== "" && phoneNumber !== "") 
        {
            let ticketPreviewSection = document.getElementById("ticket-preview");
            
            let li = document.createElement("li");
            li.classList.add("ticket-purchase");
            
            let article = document.createElement("article");

            let pNumberOfTickers = document.createElement("p");
            pNumberOfTickers.textContent = `Count: ${numTickets}`;

            let pSeatingPreference = document.createElement("p");
            pSeatingPreference.textContent = `Preference: ${seatingPreference}`;

            let pFullName = document.createElement("p");
            pFullName.textContent = `To: ${fullName}`;

            let pEmail = document.createElement("p");
            pEmail.textContent = `Email: ${email}`;

            let pPhoneNumber = document.createElement("p");
            pPhoneNumber.textContent = `Phone Number: ${phoneNumber}`;

            article.appendChild(pNumberOfTickers);
            article.appendChild(pSeatingPreference);
            article.appendChild(pFullName);
            article.appendChild(pEmail);
            article.appendChild(pPhoneNumber);

            let div = document.createElement("div");
            div.classList.add("btn-container");

            let editButton = document.createElement("button");
            editButton.classList.add("edit-btn");
            editButton.textContent = "Edit";

            let nextButton = document.createElement("button");
            nextButton.classList.add("next-btn");
            nextButton.textContent = "Next";

            div.appendChild(editButton);
            div.appendChild(nextButton);

            li.appendChild(article);
            li.appendChild(div);

            ticketPreviewSection.appendChild(li);

            purchaseTicketsButton.disabled = true;

            document.getElementById('num-tickets').value = "";
            document.getElementById('seating-preference').value = "";
            document.getElementById('full-name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone-number').value = "";

            editButton.addEventListener("click", function()
            {
                document.getElementById('num-tickets').value = numTickets;
                document.getElementById('seating-preference').value = seatingPreference;
                document.getElementById('full-name').value = fullName;
                document.getElementById('email').value = email;
                document.getElementById('phone-number').value = phoneNumber;

                li.remove();

                purchaseTicketsButton.disabled = false;
            });

            nextButton.addEventListener("click", function() 
            {
                let ticketPurchaseSection = document.getElementById("ticket-purchase");

                ticketPreviewSection.removeChild(li);

                let purchaseSectionLi = document.createElement("li");
                purchaseSectionLi.classList.add("ticket-purchase");

                let clonedArticle = article.cloneNode(true); 

                let buyButton = document.createElement("button");
                buyButton.classList.add("buy-btn");
                buyButton.textContent = "Buy";

                clonedArticle.appendChild(buyButton);

                purchaseSectionLi.appendChild(clonedArticle);

                ticketPurchaseSection.appendChild(purchaseSectionLi);

                buyButton.addEventListener("click", function() 
                {
                    ticketPurchaseSection.removeChild(purchaseSectionLi);

                    let container = document.createElement("div");
                    container.classList.add("bottom-content");

                    let h2 = document.createElement("h2");
                    h2.textContent = "Thank you for your purchase!";

                    let backButton = document.createElement("button");
                    backButton.classList.add("back-btn");
                    backButton.textContent = "Back";

                    container.appendChild(h2);
                    container.appendChild(backButton);

                    ticketPurchaseSection.parentElement.appendChild(container);

                    backButton.addEventListener("click", function() 
                    {
                        container.remove();
                        purchaseTicketsButton.disabled = false;
                    });
                });
            })
        }
    });
}

ticket_rift_rock();
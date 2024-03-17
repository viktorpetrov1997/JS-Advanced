window.addEventListener("load", manageAutumngAdventures);

function manageAutumngAdventures() 
{
    let addButton = document.getElementById("add-btn");

    addButton.addEventListener("click", function() 
    {
        let time = document.getElementById("time").value;
        let date = document.getElementById("date").value;
        let place = document.getElementById("place").value;
        let eventName = document.getElementById("event-name").value;
        let email = document.getElementById("email").value;

        if(time !== "" && date !== "" && place !== "" && eventName !== "" && email !== "") 
        {
            let li = document.createElement("li");
            li.classList.add("event-content");

            let article = document.createElement("article");

            let p1 = document.createElement("p");
            p1.textContent = `Begins: ${date} at: ${time}`;

            let p2 = document.createElement("p");
            p2.textContent = `In: ${place}`;

            let p3 = document.createElement("p");
            p3.textContent = `Event: ${eventName}`;

            let p4 = document.createElement("p");
            p4.textContent = `Contact: ${email}`;

            let editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit-btn");

            let continueButton = document.createElement("button");
            continueButton.textContent = "Continue";
            continueButton.classList.add("continue-btn");

            editButton.addEventListener("click", function () {
                document.getElementById("time").value = time;
                document.getElementById("date").value = date;
                document.getElementById("place").value = place;
                document.getElementById("event-name").value = eventName;
                document.getElementById("email").value = email;

                li.remove();
                editButton.remove();
                continueButton.remove();
                addButton.disabled = false;
            });


            continueButton.addEventListener("click", function() 
            {
                let upcomingSection = document.getElementById("upcoming-list");

                let upcomingLi = document.createElement("li");
                upcomingLi.classList.add("event-content");

                // Clone the article element from the last check section containing event information
                let clonedArticle = article.cloneNode(true);

                // Append the cloned article to the upcoming li
                upcomingLi.appendChild(clonedArticle);

                // Create "Move to Finished" button
                let moveToFinishedButton = document.createElement("button");
                moveToFinishedButton.textContent = "Move to Finished";
                moveToFinishedButton.classList.add("finished-btn");

                upcomingLi.appendChild(moveToFinishedButton);

                upcomingSection.appendChild(upcomingLi);

                addButton.disabled = false;

                li.remove();

                moveToFinishedButton.addEventListener("click", function() 
                {
                    let finishedSection = document.getElementById("finished-list");

                    let finishedLi = document.createElement("li");
                    finishedLi.classList.add("event-content");

                    // Clone the article element from the upcoming section containing event information
                    let clonedUpcomingArticle = clonedArticle.cloneNode(true);

                    // Append the cloned article to the upcoming li
                    finishedLi.appendChild(clonedUpcomingArticle);

                    finishedSection.appendChild(finishedLi);

                    upcomingLi.remove();

                    moveToFinishedButton.remove();

                    let clearButton = document.getElementById("clear");

                    clearButton.addEventListener("click", function() 
                    {
                        finishedLi.remove();
                    });
                });
            });

            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(p3);
            article.appendChild(p4);

            li.appendChild(article);
            li.appendChild(editButton);
            li.appendChild(continueButton);

            let lastCheckSection = document.getElementById("check-list");
            lastCheckSection.appendChild(li);

            document.getElementById("time").value = "";
            document.getElementById("date").value = "";
            document.getElementById("place").value = "";
            document.getElementById("event-name").value = "";
            document.getElementById("email").value = "";

            addButton.disabled = true;
        }
    });
}
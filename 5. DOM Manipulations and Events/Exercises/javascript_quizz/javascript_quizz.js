function solve() 
{
    let questions = document.querySelectorAll('section');

    let results = document.getElementById("results");

    let countCorrectAnswers = 0;

    for (let i = 0; i < questions.length; i++) 
    {
        let buttons = questions[i].querySelectorAll(".answer-wrap");

        for (let j = 0; j < buttons.length; j++) 
        {
            buttons[j].addEventListener('click', function() 
            {
                let answer = this.querySelector("p").textContent;
                if(answer === "onclick" || answer === "JSON.stringify()" || answer === "A programming API for HTML and XML documents") 
                {
                    ++countCorrectAnswers;
                }
                if(i < questions.length - 1) 
                {
                    questions[i].classList.add("hidden");
                    questions[i + 1].classList.remove("hidden");
                } 
                else 
                {
                    questions[i].classList.add("hidden");
                    document.getElementById('results').style.display = 'block';
                    let resultsMessage = results.querySelector("h1");
                    if(countCorrectAnswers == 3) 
                    {
                        resultsMessage.textContent = "You are recognized as top JavaScript fan!";
                    } 
                    else 
                    {
                        resultsMessage.textContent = `You have ${countCorrectAnswers} right answers`;
                    }
                }
            });
        }
    }
}
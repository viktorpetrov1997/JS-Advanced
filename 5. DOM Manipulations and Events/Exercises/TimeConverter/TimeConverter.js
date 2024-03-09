function convertValue()
{
    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");
    let convertButtons = document.querySelectorAll("input[type='button']");

    for(let i = 0; i < convertButtons.length; i++)
    {
        convertButtons[i].addEventListener("click", function()
        {
            let inputValue = parseInt(this.previousElementSibling.value);

            if(!isNaN(inputValue))
            {
                let id = this.getAttribute("id");

                switch(id) 
                {
                    case "daysBtn":
                        hoursInput.value = inputValue * 24;
                        minutesInput.value = inputValue * 24 * 60;
                        secondsInput.value = inputValue * 24 * 60 * 60;
                        break;
                    case "hoursBtn":
                        daysInput.value = inputValue / 24;
                        minutesInput.value = inputValue * 60;
                        secondsInput.value = inputValue * 60 * 60;
                        break;
                    case "minutesBtn":
                        daysInput.value = inputValue / (24 * 60);
                        hoursInput.value = inputValue / 60;
                        secondsInput.value = inputValue * 60;
                        break;
                    case "secondsBtn":
                        daysInput.value = inputValue / (24 * 60 * 60);
                        hoursInput.value = inputValue / (60 * 60);
                        minutesInput.value = inputValue / 60;
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
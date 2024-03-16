function validateEmail()
{
    let emailInput = document.getElementById("email");

    let emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener("change", function()
    {
        let email = emailInput.value.toLowerCase();
        if(!emailRegex.test(email))
        {
            emailInput.classList.add("error");
        }
        else
        {
            emailInput.classList.remove("error");
        }
    });
}
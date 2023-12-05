function validate() 
{
    // Get the email input element
    var emailInput = document.getElementById("email");

    // Add a change event listener to the email input
    emailInput.addEventListener("change", function () 
    {
        // Get the entered email value
        var emailValue = emailInput.value.trim().toLowerCase();

        // Regular expression for a valid email format
        var emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        // Check if the entered email matches the valid format
        if (emailPattern.test(emailValue)) 
        {
            // Clear the error class if the email is valid
            emailInput.classList.remove("error");
        } 
        else 
        {
            // Apply the error class if the email is invalid
            emailInput.classList.add("error");
        }
    });
}

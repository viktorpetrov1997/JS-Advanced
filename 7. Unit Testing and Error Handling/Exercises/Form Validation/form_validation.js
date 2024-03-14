function validateForm() 
{
    let usernameInput = document.getElementById("username");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
    let companyCheckbox = document.getElementById("company");
    let companyInfoFieldset = document.getElementById("companyInfo");
    let companyNumberInput = document.getElementById("companyNumber");
    let submitButton = document.getElementById("submit");
    let validDiv = document.getElementById("valid");

    // Regular expressions for validation
    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordRegex = /^\w{5,15}$/;
    let companyNumberRegex = /^\d{4}$/;

    // Validation functions
    function validateUsername() 
    {
        let usernameValue = usernameInput.value.trim();
        return usernameRegex.test(usernameValue);
    }

    function validateEmail() 
    {
        let emailValue = emailInput.value.trim();
        return emailRegex.test(emailValue);
    }

    function validatePassword() 
    {
        let passwordValue = passwordInput.value.trim();
        return passwordRegex.test(passwordValue);
    }

    function validateConfirmPassword() 
    {
        return confirmPasswordInput.value.trim() === passwordInput.value.trim();
    }

    function validateCompanyNumber() 
    {
        if(companyCheckbox.checked) 
        {
            let companyNumberValue = companyNumberInput.value.trim();
            return companyNumberRegex.test(companyNumberValue) && parseInt(companyNumberValue) >= 1000 && parseInt(companyNumberValue) <= 9999;
        }
        return true;
    }

    // Event listener for company checkbox change
    companyCheckbox.addEventListener("change", function() 
    {
        if(companyCheckbox.checked) 
        {
            companyInfoFieldset.style.display = "block";
        } 
        else 
        {
            companyInfoFieldset.style.display = "none";
        }
    });

    // Function to handle form submission
    function handleSubmit(event) 
    {
        event.preventDefault(); // Prevent default form submission

        // Validate fields
        let isUsernameValid = validateUsername();
        let isEmailValid = validateEmail();
        let isPasswordValid = validatePassword();
        let isConfirmPasswordValid = validateConfirmPassword();
        let isCompanyNumberValid = validateCompanyNumber();

        // Apply styles based on validation results
        usernameInput.style.borderColor = isUsernameValid ? "initial" : "red";
        emailInput.style.borderColor = isEmailValid ? "initial" : "red";
        passwordInput.style.borderColor = isPasswordValid ? "initial" : "red";
        confirmPasswordInput.style.borderColor = isConfirmPasswordValid ? "initial" : "red";
        companyNumberInput.style.borderColor = isCompanyNumberValid ? "initial" : "red";

        // Check if all required fields are valid
        validDiv.style.display = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isCompanyNumberValid ? "block" : "none";
    }

    // Attach event listener to the submit button
    submitButton.addEventListener("click", handleSubmit);
}

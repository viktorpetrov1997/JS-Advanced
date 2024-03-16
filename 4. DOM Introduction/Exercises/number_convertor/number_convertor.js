function convertNumber() 
{
    const input = document.getElementById("input");

    const convertToElement = document.getElementById("selectMenuTo");

    const result = document.getElementById("result");

    const button = document.getElementsByTagName("button")[0];

    const binaryMenuElement = document.createElement("option");
    binaryMenuElement.textContent = "Binary";
    binaryMenuElement.value = "binary";
    convertToElement.appendChild(binaryMenuElement);

    const hexadecimalMenuElement = document.createElement("option");
    hexadecimalMenuElement.textContent = "Hexadecimal";
    hexadecimalMenuElement.value = "hexadecimal";
    convertToElement.appendChild(hexadecimalMenuElement);

    button.addEventListener("click", onClick);

    function onClick() 
    {
        if(convertToElement.value === "binary") 
        {
            result.value = Number(input.value).toString(2);
        } 
        else if(convertToElement.value === "hexadecimal") 
        {
            result.value =  Number(input.value).toString(16).toUpperCase();
        }
    }
}
function encodeAndDecodeMessages() 
{
    let textArea = document.getElementsByTagName("textarea")[0];
    let receiverTextArea = document.getElementsByTagName("textarea")[1];

    let encodeButton = document.getElementsByTagName("button")[0];
    let decodeButton = document.getElementsByTagName("button")[1];

    encodeButton.addEventListener("click", function() 
    {
        let textAreaContent = textArea.value;

        let result = "";
        for (let i = 0; i < textAreaContent.length; i++) 
        {
            let charCode = textAreaContent.charCodeAt(i);
            charCode += 1;
            result += String.fromCharCode(charCode);
        }

        textArea.value = "";
        receiverTextArea.value = result;
    });

    decodeButton.addEventListener("click", function() 
    {
        let receiverTextAreaContent = receiverTextArea.value;

        let result = "";
        for (let i = 0; i < receiverTextAreaContent.length; i++) 
        {
            let charCode = receiverTextAreaContent.charCodeAt(i);
            charCode -= 1;
            result += String.fromCharCode(charCode);
        }

        receiverTextArea.value = result;
    });
}


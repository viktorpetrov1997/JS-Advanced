function formatText() 
{
    const inputText = document.getElementById('input').value;
    let output = document.getElementById('output');

    const sentences = inputText.split(".").filter(s => s !== "").map((s) => s + ".");

    const paragrapCount = Math.ceil(sentences.length / 3);

    for (let i = 0; i < paragrapCount; i++) 
    {
        let joinedSentences = sentences.splice(0, 3).join("");
        output.innerHTML += `<p>${joinedSentences}</p>`;
    }
}

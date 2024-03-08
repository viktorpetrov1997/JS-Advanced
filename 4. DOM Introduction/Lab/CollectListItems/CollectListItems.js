function extractText()
{
    let elements = document.querySelectorAll("ul#items li");
    let textArea = document.getElementById('result');
    for(let node of elements)
    {
        textArea.textContent += node.textContent += "\n";
    }
}
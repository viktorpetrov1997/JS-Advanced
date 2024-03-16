function addItem()
{
    let input = document.getElementById("newItemText").value;

    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(input));

    document.getElementById("items").appendChild(newItem);

    document.getElementById("newItemText").value = "";
}
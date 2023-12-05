function addItem()
{
    let newText = document.getElementById('newItemText').value;

    let newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(newText));

    document.getElementById('items').appendChild(newItem);

    document.getElementById('newItemText').value = "";
}
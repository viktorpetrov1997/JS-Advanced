function addItem() 
{
    // Get the input value
    let newItemText = document.getElementById("newItemText").value;

    // Get the items list
    let itemsList = document.getElementById("items");

    // Create a new list item
    let newItem = document.createElement("li");

    // Set the text content of the list item
    newItem.textContent = newItemText;

    // Create a delete link
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";

    // Add a click event listener to the delete link
    deleteLink.addEventListener("click", function () 
    {
        // Remove the corresponding list item when the delete link is clicked
        itemsList.removeChild(newItem);
    });

    // Append the delete link to the list item
    newItem.appendChild(deleteLink);

    // Append the new list item to the items list
    itemsList.appendChild(newItem);

    // Clear the input field
    document.getElementById("newItemText").value = "";
}
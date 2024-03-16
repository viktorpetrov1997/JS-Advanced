function notify(message)
{
    let notificationDiv = document.getElementById("notification");

    notificationDiv.innerHTML = message;

    notificationDiv.style.display = "block";

    notificationDiv.addEventListener("click", function()
    {
        notificationDiv.style.display = "none";
    });
}
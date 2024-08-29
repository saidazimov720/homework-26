document.getElementById("newItemForm").addEventListener("submit", function(event)  {
    event.preventDefault();
    const newItemtype = document.getElementById("newItemType").value.trim().toLoweCase();
    const itemCount = parseInt(document.getElementById("itemCount").value, 10);
    if (newItemtype && !isNaN(itemCount) && customEndPoints[newItemtype]) {
        fetchAndDisplayNewItem(newItemtype, itemCount);
    } else {
        console.error("Invalid input");
    }
});

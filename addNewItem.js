document.getElementById("newItemForm").addEventListener("submit", function(event)  {
    event.preventDefault();
    const newItemtype = document.getElementById("newItemType").value.trim().toLoweCase();
})
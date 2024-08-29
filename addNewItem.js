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

function fetchAndDisplayNewItem(type, count) {
    fetch(`${customEndPoints[type]}?_limit = ${count}`)
    .then(response => response.json())
    .then(data => {
        const outputDiv = document.getElementById(`${type}Output`) || createOutputDiv(type);
        outputDiv.innerHTML = "<h3>${capitalizeFirstLetter(type)}</h3>";
        data.forEach(item => {
            const div = document.createElement("div");
            div.className = 'data-item';
            div.innerHTML = `
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>Title:</strong> ${item.title}</p>`;
            outputDiv.appendChild(div);
        });
    })
}

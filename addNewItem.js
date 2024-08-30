document.getElementById('newItemForm').addEventListener('submit', function() {

    const newItemType = document.getElementById('newItemType').value.trim().toLowerCase();
    const newItemID = document.getElementById('newItemID').value.trim();
    const newItemTitle = document.getElementById('newItemTitle').value.trim();

    if (newItemType && newItemID && newItemTitle) {
        addNewItem(newItemType, newItemID, newItemTitle)
            .then(success => {
                if (success) {
                    alert('New data added successfully');
                    addNewItemOutput(newItemType, newItemID, newItemTitle);
                } else {
                    alert('The new data didn\'t add successfully');
                }
            });
    } else {
        alert('Invalid input for new item');
    }
});

function addNewItem(type, id, title) {
    return fetch(customEndpoints[type], {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            title: title
        })
    })
    .then(response => response.ok)
    .catch(error => {
        console.error(`Error adding new ${type}:`, error);
        return false;
    });
}

function addNewItemOutput(type, id, title) {
    const outputDiv = document.getElementById(`${type}Output`) || createOutputDiv(type);
    const div = document.createElement('div');
    div.className = 'data-item';
    div.innerHTML = `<p><strong>ID:</strong> ${id}</p><p><strong>Title:</strong> ${title}</p>`;
    outputDiv.appendChild(div);
}
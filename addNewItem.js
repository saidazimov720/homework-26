document.getElementById('newItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newItemType = document.getElementById('newItemType').value.trim().toLowerCase();
    const newItemUrl = document.getElementById('newItemUrl').value.trim();
    const itemCount = parseInt(document.getElementById('itemCount').value, 10);
    if (newItemType && newItemUrl && itemCount) {
        customEndpoints[newItemType] = newItemUrl;
        fetchAndDisplayNewItem(newItemType, itemCount);
        console.log(`Added new item: ${newItemType} with URL: ${newItemUrl}`);
    } else {
        console.error('Invalid input for new item type, URL, or count');
    }
});

function fetchAndDisplayNewItem(type, count) {
    fetch(`${customEndpoints[type]}?_limit=${count}`)
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById(`${type}Output`) || createOutputDiv(type);
            outputDiv.innerHTML = `<h3>${capitalizeFirstLetter(type)}</h3>`;
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'data-item';
                div.innerHTML = `
                    <p><strong>ID:</strong> ${item.id}</p>
                    <p><strong>Title:</strong> ${item.title || item.name || item.username || 'N/A'}</p>
                `;
                outputDiv.appendChild(div);
            });
        })
        .catch(error => console.error(`Error fetching ${type}:`, error));
}

function createOutputDiv(type) {
    const outputDiv = document.createElement('div');
    outputDiv.id = `${type}Output`;
    document.getElementById('customOutputs').appendChild(outputDiv);
    return outputDiv;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
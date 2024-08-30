const customEndpoints = {
    photos: 'https://jsonplaceholder.typicode.com/photos',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    users: 'https://jsonplaceholder.typicode.com/users',
    todos: 'https://jsonplaceholder.typicode.com/todos'
};

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const queries = query.split(',').map(item => item.trim());
    queries.forEach(queryItem => {
        const [key, value] = queryItem.split('=');
        const count = parseInt(value, 10);
        if (key && !isNaN(count)) {
            if (customEndpoints[key.toLowerCase()]) {
                fetchData(key.toLowerCase(), count);
            } else {
                console.error('Unknown key:', key);
            }
        } else {
            console.error('Invalid input:', queryItem);
        }
    });
});

function fetchData(type, count) {
    fetch(`${customEndpoints[type]}?_limit=${count}`)
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById(`${type}Output`) || createOutputDiv(type);
            outputDiv.innerHTML = `<h3>${capitalizeFirstLetter(type)}</h3>`;
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'data-item';
                if (item.url && item.url.includes('http')) {
                    div.innerHTML = `<img src="${item.url}" alt="${type}" /><br/>` + JSON.stringify(item, null, 2);
                } else {
                    div.innerHTML = JSON.stringify(item, null, 2);
                }
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
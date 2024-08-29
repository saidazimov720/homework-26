const customEndPoints = {
    photos: " https://jsonplaceholder.typicode.com/photos",
    posts: "https://jsonplaceholder.typicode.com/posts",
    comments: "https://jsonplaceholder.typicode.com/comments",
    albums: "https://jsonplaceholder.typicode.com/albums",
    users: "https://jsonplaceholder.typicode.com/users",
    todos: "https://jsonplaceholder.typicode.com/todos"
};

function fetchData(type, count) {
    fetch(`${customEndPoints[type]}?_limit=${count}`)
    .then(response => response.json())
    .then(data => {
      const outputDiv = document.getElementById(`${type}Output`) || createOutputDiv(type);
      outputDiv.innerHTML = `<h3>${capitalizeFirstLetter(type)}</h3>`;
      data.forEach(item => {
        const div = document.createElement("div");
        div.className = "data-item";
        div.innerHTML = JSON.stringify(item, null, 2);
        outputDiv.appendchild(div);
      });
    })
    .catch(error => console.error(`Error : ${type}`, error));
}

function createOutputDiv(type) {
    const outputDiv = document.createElement('div');
    outputDiv.id = `${type}Output`;
    
}
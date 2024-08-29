document.getElementById("dataForm").addEventListener("submit", function (event){
    event.preventDefault();
    const query = document.getElementById("query").value;
    const queries = query.split(',').map(item => item.trim());

    queries.forEach(queryItem => {
        const[key, value] = queryItem.split('=');
        const count = parseInt(value, 10);
        if (key && !isNaN(count)) {
            switch (key.toLowerCase()) {
                case 'photos':
                    fetchPhotos(count);
                    break;
                case 'posts':
                    fetchPosts(count);
                    break;
                case 'comments':
                    fetchComments(count);
                    break;
                case 'albums':
                    fetchAlbums(count);
                    break;
                case 'users':
                    fetchUsers(count);
                    break;
                case 'todos':
                    fetchTodos(count);
                    break;
                default:
                    console.error("Unknown key:", key);
                    break;
            }
        }
    });
})
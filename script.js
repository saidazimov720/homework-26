let posts = "/posts";
let albums = "/albums";
let todos = "/todos";
let users = "/users";

fetch(`https://jsonplaceholder.typicode.com/${posts}`, {
method: "POST",
body: JSON.stringify({
    id: 1,
    color: "red",
}),
})
.then((response) => response.json())
.then((json) => console.log(json))
.then((err) => console.log(err));
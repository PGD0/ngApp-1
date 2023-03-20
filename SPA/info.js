
const input = document.querySelector('#busq');
const boton = document.querySelector('#btn');
const caja = document.querySelector('#tarjeta');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    buscar(input.value);
})

function buscar(usuario){
    const respuesta = fetch(`https://api.github.com/users/${usuario}`).then(res => res.json())
    .then(datos => {
        mostrar(datos)
    });
    
}

function mostrar(usuario){
    console.log(usuario)
    let fecha = usuario.created_at;
    fecha = new Date()
    if (usuario.message === "Not Found") {
        document.getElementById('tarjeta').innerHTML = `
        <h1>No hay usuarios que cumplan con el criterio de búsqueda</h1>
        `
    } else {
        document.getElementById('tarjeta').innerHTML = `
        <div class = "contLeft">
            <div class = "palabraResal">
                <p class="user_log">${usuario.login}</p>
            </div>
            <img class="img" src="${usuario.avatar_url}">
            <div class = "palabraResal">
                <p class ="created">${fecha.toDateString()}</p>
            </div>
            <p class="user_id">ID: ${usuario.id}</p>
        </div>
        <div class = "contRight">
            <p class="name">${usuario.name}</p>
            <div class = "cajas1">
                <p class="location"><img src="./img/map-location.png" alt="" class ="ubicacion" width="30px">${usuario.location}</p>
                <p class="twitter_username"><img src="./img/twitter.png" width = "40px">@${usuario.twitter_username}</p>
            </div>
            <a id="link"><img src="./img/bebo-logo.png" width = "40px">${usuario.blog}</a>
            <div class = "cajas2">
                <div class = "repos">
                    <h2>REPOS</h2>
                    <img src="./img/code.png" width = "40px">
                    <p class="public_repos">${usuario.public_repos}</p>
                </div>
                <div class = "followers">
                    <h2>FOLLOWERS</h2>
                    <img src="./img/followers.png" width = "40px">
                    <p class="followers">${usuario.followers}</p>
                </div>
                <div class = "following">
                    <h2>FOLLOWING</h2>
                    <img src="./img/following.png" width = "40px">
                    <p class="following">${usuario.following}</p>
                </div>
            </div>
        </div>
    `
    }

}

mostrar();
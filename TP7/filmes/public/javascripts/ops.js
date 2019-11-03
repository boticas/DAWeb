function eliminar(id) {
    axios.delete("/filmes/" + id)
        .then(response => window.location.assign("/filmes"))
        .catch(erro => console.log(erro))
}

/* Throw PUT request */
function atualizar(id) {
    const newFilme = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
    }
    
    axios.put("/filmes/" + id, newFilme)
        .then(response => window.location.assign("/filmes/" + id))
        .catch(erro => console.log(erro))
}
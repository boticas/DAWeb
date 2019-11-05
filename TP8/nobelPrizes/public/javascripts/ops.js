function eliminar(id) {
    console.log("Vou apagar o item: " + id);
    
    axios.delete("http://localhost:3005/api/alunos/" + id)
        .then(response => window.location.assign("/alunos"))
        .catch(erro => console.log(erro))
}
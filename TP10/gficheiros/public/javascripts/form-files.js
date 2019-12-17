let remove = (id) => {
    axios.delete(`/api/file/${id}`)
        .then((response) => {
            window.location.assign("/")
        })
        .catch((error) => {
            console.log(`Erro: ${error}`)
        })
}

function showFiles(f) {
    if (f.mimetype == 'image/png') {
        var file = $("<img src=files/" + fname + "width=80%/>")
        var download = $(`<br><br><div><a href="/download/${f.name}">Download</a></div>`)
    }
    else {
        var file = $(`<pre>${JSON.stringify(f, null, 4)}</pre>`)
        var download = $(`<div><a href="/download/${f.name}">Download</a></div>`)
    }

    $("#display").empty()
    $("#display").append(file, download)
    $("#display").modal()
}

$(() => {
    var count = 1

    $("#mais1").click(e => {
        e.preventDefault()
        count++

        var campo = $('<div></div>', { class: 'w3-container', id: 'f' + count })
        var desc = $('<div></div>', { class: 'w3-cell-row', id: 'desc' + count })
        var descLabel = $('<label class="w3-cell">Descrição</label>')
        var descInput = $('<input/>', { class: 'w3-input w3-cell input', type: "text", name: "desc" }).prop("required", true)

        var ficheiro = $("<div></div>", {class: "w3-cell-row", id: "ficheiro" + count})
        let ficheiroLabel = $("<label class='w3-cell'>Ficheiro:</label>")
        let ficheiroInput = $("<input/>", { class: "w3-input w3-cell input", id: "inputFile", type: "file", name: "file" }).prop("required", true)
        
        $("#lista").append(campo)
        
        $(`#f${count}`).append(desc)
        $(`#desc${count}`).append(descLabel, descInput, "<br>")
        
        $(`#f${count}`).append(ficheiro)
        $(`#ficheiro${count}`).append(ficheiroLabel, ficheiroInput, "<br>")
        
        $("#remover").prop("disabled", false)
    })

    $("#remover").click(e => {
        e.preventDefault()
        if (count >= 2) {
            $("#f" + count).remove()
            count--
        }
    })

    $("#remover").hover(e => {
        e.preventDefault()
        if (count == 1) {
            $("#remover").prop("disabled", true)
        }
    })
})
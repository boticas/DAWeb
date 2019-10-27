function eliminar(id) {
    axios.delete("/arq/" + id)
        .then(response => window.location.assign("/"))
        .catch(erro => console.log(erro))
}

/* Throw PUT request */
function atualizar(id) {
    let newObject = {
        prov: document.getElementById("prov").value,
        tit: document.getElementById("tit").value,
        file: {
            "-t": document.getElementById("file-t").value,
            "#text": document.getElementById("file#text").value
        },
        duracao: document.getElementById("duracao").value,
        id: id
    }

    if (document.getElementById("local") != null) {
        let local = document.getElementById("local").value
        newObject["local"] = local
    }

    if (document.getElementById("inst") != null) {
        let inst = document.getElementById("inst").value
        newObject["inst"] = inst
    }

    let auxObject = {}
    if (document.getElementById("musico#text") != null) {
        let musicoText = document.getElementById("musico#text").value
        let musicoFrom = document.getElementById("musicofrom").value

        auxObject["#text"] = musicoText
        auxObject["from"] = musicoFrom
        newObject["musico"] = auxObject

    } else if (document.getElementById("musico#text0") != null) {
        let musicoText0 = document.getElementById("musico#text0").value
        let musicoText1 = document.getElementById("musico#text1").value
        let musicoProf = document.getElementById("musicoprof").value

        auxObject["#text"] = [musicoText0, musicoText1]
        auxObject["prof"] = musicoProf
        newObject["musico"] = auxObject

    } else if (document.getElementById("musico") != null) {
        let musico = document.getElementById("musico").value
        newObject["musico"] = musico
    }

    axios.put("/arq/" + id, newArq)
        .then(response => window.location.assign("/arq/" + id))
        .catch(erro => console.log(erro))
}
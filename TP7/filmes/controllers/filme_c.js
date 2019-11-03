var Filme = require("../models/filme")

const Filmes = module.exports

Filmes.listar = limit => {
    if(limit)
        return Filme.find().sort({title: 1}).limit(25).exec()
    else
        return Filme.find().sort({ title: 1 }).exec()
}

Filmes.consultar = fid => {
    return Filme.findOne({_id: fid}).exec()
}

Filmes.apagar = (fid, filme) => {
    return Filme.deleteOne({_id: fid}, filme)
}

Filmes.novo = doc => {
    return Filme.create(doc)
}

Filmes.update = (fid, updated) => {
    return Filme.updateOne({_id: fid}, updated)
}
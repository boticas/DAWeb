var Filme = require("../models/filme")

const Filmes = module.exports

Filmes.listar = () => {
    return Filme
        .find()
        .sort({title: 1})
        .exec()
}

Filmes.consultar = fid => {
    return Filme
        .findOne({_id: fid})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.projetar = campos => {
    return Filme
        .find({}, campos)
        .exec()
}

Filmes.agregar = campo => {
    return Filme
        .aggregate([{$group: {_id: "$" + campo, contador: {$sum: 1}}}, {$sort: {contador: -1}}])
        .exec()
}

Filmes.apagar = fid => {
    return Filme
        .remove({_id: fid})
        .exec()
}

Filmes.novo = doc => {
    return Filme
        .insert(doc)
        .exec()
}

Filmes.update = fid, updated => {
    return Filme
        .update({_id: fid}, updated)
        .exec()
}
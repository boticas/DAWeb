var Compositor = require('../models/compositor')

var Compositores = module.exports

// Devolve a lista de compositores
Compositores.listar = () => {
    return Compositor.find({}, {_id:1, nome: 1, dataNasc:1, dataObito:1}).exec()
}

// Devolve a info de um compositor
Compositores.consultar = (id) => {
    return Compositor.findOne({_id: id}).exec()
}

// Devolve os compositores de um dado periodo
Compositores.periodo = (p) => {
    return Compositor.find({periodo: p}).exec()
}

// Devolve os compositores vivos num dado ano
Compositores.ano = (ano) => {
    return Compositor.find({ dataNasc: { $lte: ano }, dataObito: { $gte: ano }}).exec()
}

// Devolve os compositores de uns dados periodo e ano
Compositores.ano_periodo = (ano, p) => {
    return Compositor.find({ periodo: p, dataNasc: { $lte: ano }, dataObito: { $gte: ano } }).exec()
}
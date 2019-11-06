var Premio = require('../models/premios')

var Premios = module.exports

// Devolve a lista de premios
Premios.listar = () => {
    return Premio.find({}, {year: 1, category: 1}).exec()
}

// Devolve a info de um premio
Premios.consultar = (id) => {
    return Premio.findOne({_id: id}).exec()
}

// Devolve a lista de categorias
Premios.categorias = () => {
    return Premio.aggregate([{$group: {_id: null, categorias: {$addToSet: "$category"}}}])
}

// Devolve a lista de laureados
Premios.laureados = () => {
    return Premio.aggregate([{ $unwind: '$laureates' }, 
                                       { $group: { '_id': '$laureates.id', 
                                                   'year': { '$push': '$year' }, 
                                                   'category': { '$push': '$category' }, 
                                                   'firstname': { '$addToSet': '$laureates.firstname' }, 
                                                   'surname': { '$addToSet': '$laureates.surname' } 
                                                 } 
                                       }, 
                                       { $unwind: "$firstname" }, 
                                       { $unwind: "$surname"},
                                       { $sort: { firstname: 1, surname: 1 } }
                                    ])
}

Premios.lista_cat = (categoria) => {
    return Premio.find({category: categoria}).exec()
}

Premios.lista_cat_data = (categoria, data) => {
    return Premio.find({ category: categoria, year: {$gt: data} }).exec()
}
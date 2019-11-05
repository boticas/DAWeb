var Premio = require('../models/premios')

var Premios = module.exports

// Devolve a lista de premios
Premios.listar = () => {
    return Premios.find({}, {year: 1, category: 1}).exec()
}

// Devolve a info de um premio
Premios.consultar = id => {
    return Premios.findOne({_id: id}).exec()
}

// Devolve a lista de categorias
Premios.categorias = () => {
    return Premios.aggregate([{$addToSet: "$category"}])
}

// Devolve a lista de laureados
Premios.laureados = () => {
    return Premiosdb.prizes.aggregate([{ $unwind: '$laureates' }, 
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
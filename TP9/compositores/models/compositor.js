var mongoose = require('mongoose')

var compositorSchema = new mongoose.Schema({
    nome: String,
    bio: String,
    dataNasc: String,
    dataObito: String,
    periodo: String,
    _id: String 
})

module.exports = mongoose.model('compositor', compositorSchema, 'compositores')
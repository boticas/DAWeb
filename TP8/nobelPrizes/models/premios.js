var mongoose = require('mongoose')

var laureadoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    surname: String,
    motivation: String,
    share: Number
})

var premioSchema = new mongoose.Schema({
    year: Number,
    category: String,
    overallMotivation: String,
    laureates: [laureadoSchema]
})

module.exports = mongoose.model('prize', premioSchema)
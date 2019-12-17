const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema ({
    data: String,
    desc: String,
    name: String,
    mimetype: String,
    size: Number
})

module.exports = mongoose.model('file', fileSchema)
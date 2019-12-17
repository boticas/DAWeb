var File = require("../models/files")

const Files = module.exports

Files.listar = () => {
    return File.find({}, {}).exec()
}

Files.consultByID = (id) => {
    return File.find({ _id: id }, {}).exec()
}

Files.consultByDate = (date) => {
    return File.find({ date: date }, {}).exec()
}

Files.delete = (id) => {
    return File.deleteOne({ _id: id }).exec()
}
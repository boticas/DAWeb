var express = require('express')
var router = express.Router()
const fs = require('fs')
var Files = require('../controllers/files')
var File = require('../models/files')

var multer = require('multer')
var upload = multer({dest: 'uploads/'})

router.get('/files', (req, res) => {
    Files.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get("/file/:id", (req, res, next) => {
    Files.consultByID(req.params.id)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.status(500).jsonp(erro)
        })
})

router.get("/file", (req, res, next) => {
    Files.consultByDate(req.query.date)
        .then(data => {
            res.jsonp(data)
        })
        .catch(erro => {
            res.status(500).jsonp(erro)
        })
})

router.post('/files', upload.array('file'), (req, res) => {
    req.files.forEach((file, index) => {
        let oldPath = __dirname + '/../' + file.path
        let newPath = __dirname + '/../public/files/' + file.originalname
        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err
        })
        
        let date = new Date()
        
        let newFile = new File({
            data: date.toISOString(),
            desc: req.body.desc[index],
            name: file.originalname,
            path: newPath,
            mimetype: file.mimetype,
            size: file.size
        })
        
        newFile.save((err, file) => {
            if (!err) console.log('Ficheiro guardado com sucesso')
            else console.log('ERRO: ' + err)
        })
    })
    res.redirect('/')
})

router.delete("/file/:id", (req, res, next) => {
    Files.delete(req.params.id)
        .then(dados => console.log("Ficheiro eliminado com sucesso"))
        .catch(e => console.log("Erro: " + e))
    res.sendStatus(200)
})

router.all("*", (req, res, next) => {
    res.status(500).render("error", {error: "Pedido HTTP não suportado"})
})

module.exports = router
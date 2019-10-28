var express = require('express')
var router = express.Router()
var jsonfile = require("jsonfile")

// Caminho do ficheiro JSON da base de dados
const myDB = "arq-son-EVO.json"

// Envia uma página de erro ao cliente, indicando que o elemento não existe
function arqFault(res) {
    res.status(400).render('error', { message: "Elemento não existe", error: { status: "O elemento pedido não foi encontrado" } })
}

/*
    Pedidos GET
*/

// GET da página principal
router.get(['/', "/arq"], function (req, res, next) {
    jsonfile.readFile(myDB, (erro, arq) => {
        if (!erro)
            res.render('index', { arq: arq.arq.doc })
        else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

// GET da página de adição de elementos
router.get('/arq/add', function (req, res, next) {
    res.render('add')
})

// GET da página de um elemento
router.get('/arq/:id', function (req, res, next) {
    jsonfile.readFile(myDB, (erro, arq) => {
        if (!erro) {
            const a = arq.arq.doc.find((value) => value.id == req.params.id)
            if (a)
                res.render("arq", { a: a })
            else
                arqFault(res)
        } else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

// GET da página de edição de um elemento
router.get('/arq/update/:id', function (req, res, next) {
    jsonfile.readFile(myDB, (erro, arq) => {
        if (!erro) {
            const a = arq.arq.doc.find((value) => value.id == req.params.id)
            if (a)
                res.render("update", { a: a })
            else
                arqFault(res)
        } else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

/*
    Pedidos DELETE
*/
// Eliminar um elemento
router.delete("/arq/:id", function (req, res, next) {
    jsonfile.readFile(myDB, (erro, arq) => {
        if (!erro) {
            const idx = arq.arq.doc.find((value) => value.id == req.params.id)
            if (idx != -1) {
                arq.arq.doc.splice(idx, 1)
                jsonfile.writeFile(myDB, arq, erro => {
                    if (!erro) {
                        console.log("Elemento eliminado com sucesso...")
                        res.sendStatus(200)
                    } else {
                        console.log(erro)
                        res.status(400).render('error', { error: erro })
                    }
                })
            } else
                arqFault(res)
        } else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

/*
    Pedidos POST
*/
// Adicionar um novo elemento
router.post("/arq/new", function (req, res, next) {
    jsonfile.readFile(myDB, (erro, arq) => {
        if (!erro) {
            req.body.id = arq.nextid
            arq.nextid++
            arq.arq.doc.push(req.body)
            jsonfile.writeFile(myDB, arq, erro => {
                if (!erro) {
                    console.log("Elemento gravado com sucesso...")
                    res.redirect("/arq/" + req.body.id)
                } else {
                    console.log(erro)
                    res.status(400).render('error', { error: erro })
                }
            })
        } else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

/*
    Pedidos PUT
*/
// PUT de um elemento atualizado
router.put("/arq/:id", function (req, res, next) {
    jsonfile.readFile(myDB, (erro, obj) => {
        if (!erro) {
            docs = obj.arq.doc
            const idx = docs.find((value) => value.id == req.params.id)
            if (idx != -1) {
                req.body.id = req.params.id
                docs[idx] = req.body
                obj.arq.doc = docs
                jsonfile.writeFile(myDB, obj, erro => {
                    if (!erro) {
                        console.log("Elemento atualizado com sucesso...")
                        res.sendStatus(200)
                    } else {
                        console.log(erro)
                        res.status(400).render('error', { error: erro })
                    }
                })
            } else
                arqFault(res)
        } else {
            console.log(erro)
            res.status(400).render('error', { error: erro })
        }
    })
})

module.exports = router
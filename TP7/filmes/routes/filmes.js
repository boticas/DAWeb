var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filme_c')

/* GET lista de filmes. */
router.get("/", function(req, res) {
  Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get("/:idFilme", function (req, res) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get("/add", function (req, res) {
  res.render("add")
})

router.delete("/:idFilme", function (req, res) {
  Filmes.apagar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.post("/", function (req, res) {
  Filmes.novo(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro =>  res.status(500).jsonp(erro))
})

router.put("/:idFilme", function (req, res) {
  Filmes.update(req.params.idFilme, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro =>  res.status(500).jsonp(erro))
})

module.exports = router
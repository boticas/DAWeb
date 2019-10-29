var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filme_c')

/* GET lista de filmes. */
router.get('/', function(req, res) {
  Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/:idFilme', function (req, res) {
  Filmes.consultar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router
var express = require('express');
var router = express.Router();
var Premios = require('../controllers/premios');

/* GET lista de prémios. */
router.get('/premios', function (req, res, next) {
    Premios.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/* GET info completa de um prémio. */
router.get('/premios/:idPremio', function (req, res) {
    Premios.consultar(req.params.idPremio)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/* GET lista de categorias. */
router.get('/categorias', function (req, res) {
    Premios.categorias()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/* GET lista de laureados. */
router.get('/laureados', function (req, res) {
    Premios.laureados()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
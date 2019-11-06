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
router.get('/premios/:id', function (req, res) {
    Premios.consultar(req.params.id)
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

router.get('/premios?', (req, res) => {
    if (req.query.data != null) {
        Premios.lista_cat(req.query.categoria)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Premios.lista_cat_data(req.query.categoria, req.query.data)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

module.exports = router;
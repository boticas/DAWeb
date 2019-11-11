var express = require('express');
var router = express.Router();
var Premios = require('../controllers/premios');

/* GET lista de prémios. */
router.get('/premios', function (req, res, next) {
    if(Object.entries(req.query).length === 0) {
        Premios.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if(req.query.categoria !== undefined && Object.entries(req.query).length === 1) {
        Premios.lista_cat(req.query.categoria)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if (req.query.categoria !== undefined && req.query.data !== undefined && Object.entries(req.query).length === 2) {
        let category = req.query.categoria
        let data = req.query.data
        Premios.lista_cat_data(category, data)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        res.status(500).render("error", {error: "Os parâmetros introduzidos não são suportados..."})
    }
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

module.exports = router;
var express = require('express');
var router = express.Router();
var Obras = require('../controllers/obras');

/* GET lista de prémios. */
router.get('/obras', function (req, res, next) {
    if("compositor" in req.query && "duracao" in req.query) {
        Obras.lista_comp_dur(req.query.compositor, req.query.duracao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if("ano" in req.query) {
        Obras.lista_ano(req.query.ano)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if ("periodo" in req.query) {
        Obras.lista_periodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Obras.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

/* GET info completa de um prémio. */
router.get('/obras/:id', function (req, res) {
    Obras.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/* GET lista de categorias. */
router.get('/compositores', function (req, res) {
    Obras.compositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

/* GET lista de laureados. */
router.get('/periodos', function (req, res) {
    Obras.periodos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.all('*', function (req, res) {
    res.jsonp({error: "Route not found"})
})

module.exports = router;
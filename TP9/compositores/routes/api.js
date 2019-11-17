var express = require('express');
var router = express.Router();
var Compositores = require('../controllers/compositor');

/* GET lista de compositores. */
router.get('/compositores', function (req, res, next) {
    if("ano" in req.query && "periodo" in req.query) {
        Compositores.ano_periodo(req.query.ano, req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if("ano" in req.query) {
        Compositores.ano(req.query.ano)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if ("periodo" in req.query) {
        Compositores.periodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Compositores.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

/* GET info completa de um compositor. */
router.get('/compositores/:id', function (req, res) {
    Compositores.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.all('*', function (req, res) {
    res.jsonp({error: "Route not found"})
})

module.exports = router;
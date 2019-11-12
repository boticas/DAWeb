var express = require('express');
var router = express.Router();
var axios = require("axios").default;

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ"

/* GET lista de entidades. */
router.get(["/", "/entidades"], (req, res) => {
    axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=' + apiKey)
        .then((entidades) => res.render('index', {entidades: entidades.data}))
        .catch((erro) => {
            console.log(erro);
            res.render('error', {error: erro})
        })
})

router.get("/entidades/:id", (req, res) => {
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '?apikey=' + apiKey)
        .then((entidade) => {
            axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/dono?apikey=' + apiKey)
            .then((intervencao) => {
                axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/tipologias?apikey=' + apiKey)
                        .then((tipologia) => {
                            axios.get('http://clav-api.dglab.gov.pt/api/entidades/' + req.params.id + '/intervencao/participante?apikey=' + apiKey)
                                .then((participante) => {
                                    res.render('entidade', {e: entidade.data,  tipologias: tipologia.data, intervencoes: intervencao.data, participantes: participante.data})
                                })
                                .catch((erro) => res.render('error', { error: erro }))
                        })
                        .catch((erro) => res.render('error', { error: erro }))
                })
                .catch((erro) => res.render('error', { error: erro }))
        })
        .catch((erro) => res.render('error', { error: erro }))
})

router.all('*', function (req, res) {
    res.jsonp({error: "Route not found"})
})

module.exports = router;
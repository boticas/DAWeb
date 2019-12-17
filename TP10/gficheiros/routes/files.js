var express = require('express')
var router = express.Router()
var axios = require("axios")
const lhost = require("../config/env").host

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get(lhost + '/api/files')
        .then(dados => {
            res.render('index', { list: dados.data })
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

router.get('/download/:fname', (req, res) => {
  res.download(__dirname + '/../public/files/' + req.params.fname)
})

module.exports = router;

var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function (req, res, next) {
  res.render('index', {title: "Prémios Nobel"})
})

/* GET da lista de categorias. */
router.get('/categorias', function (req, res, next) {
  axios.get('http://localhost:3005/api/categorias')
    .then(dados => {
      console.log(dados.data);
      res.render('lista-categorias', { categorias: dados.data }) // o resultado de um axios tem vários campos, incluindo endereços IP utilizados, dados, etc. Os dados estão no campo "data"
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
})

/* GET da lista de laureados. */
router.get('/laureados', function (req, res, next) {
  axios.get('http://localhost:3005/api/laureados')
    .then(dados => {
      console.log(dados.data);
      res.render('lista-laureados', { laureados: dados.data }) // o resultado de um axios tem vários campos, incluindo endereços IP utilizados, dados, etc. Os dados estão no campo "data"
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })
})


module.exports = router;

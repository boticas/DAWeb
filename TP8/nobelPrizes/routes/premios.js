var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET da lista de premios. */
router.get('/', function (req, res, next) {
	axios.get('http://localhost:3005/api/premios')
		.then(dados => {
			res.render('lista-premios', { premios: dados.data })
		})
		.catch(erro => {
			res.render('error', { error: erro })
		})
})

// GET recupera a info de um premio
router.get('/:id', function (req, res) {
	axios.get('http://localhost:3005/api/premios/' + req.params.id)
		.then(dados => {
			res.render('premio', { premio: dados.data })
		})
		.catch(erro => {
			res.render('error', { error: erro })
		})
})

module.exports = router;
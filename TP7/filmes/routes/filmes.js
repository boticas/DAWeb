var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filme_c')

/*
	PEDIDOS GET
*/

/* GET da página principal */
router.get(["/", "/filmes"], function(req, res) {
	Filmes.listar(true)
		.then((filmes) => res.render('index', { filmes }))
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', {error: erro})
		})
})

/* GET da página principal (todos os filmes) */
router.get(["/all", "/filmes/all"], function (req, res, next) {
	Filmes.listar(false)
		.then((filmes) => res.render('index', { filmes }))
		.catch((erro) => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

/* GET da página de um filme */
router.get("/filmes/:idFilme", function (req, res) {
	Filmes.consultar(req.params.idFilme)
		.then(filme => res.render('filme', { filme }))
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

/* GET da página de adição de filmes */
router.get("/filmes/add", function (req, res) {
	res.render('add')
})

/* GET da página de edição de filmes */
router.get("/filmes/update/:idFilme", function (req, res) {
	Filmes.consultar(req.params.idFilme)
		.then(filme => res.render('update', { filme }))
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

/*
	PEDIDOS DELETE
*/

/* DELETE de um filme */
router.delete("/filmes/:idFilme", function (req, res) {
	Filmes.apagar(req.params.idFilme)
		.then(dados => {
			console.log("Filme eliminado com sucesso")
			res.sendStatus(200)
		})
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

/*
	PEDIDOS POST
*/

/* POST de um novo filme */
router.post("/filmes", function (req, res) {
	const filme = {
		title: req.body.title,
		year: req.body.year
	}
	Filmes.novo(filme)
		.then(dados => {
			console.log("Filme gravado com sucesso")
			res.redirect("/filmes/" + dados._id)
		})
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

/*
	PEDIDOS PUT
*/

/* PUT de um filme atualizado */

router.put("/filmes/:idFilme", function (req, res) {
	Filmes.update(req.params.idFilme, req.body)
		.then(dados => {
			console.log("Filme atualizado com sucesso")
			res.sendStatus(200)
		})
		.catch(erro => {
			console.log(erro)
			res.status(400).render('error', { error: erro })
		})
})

module.exports = router
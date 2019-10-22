var http = require('http')
var url = require('url')
var pug = require('pug')
var fs = require('fs')
var jsonfile = require('jsonfile')

var {parse} = require('querystring') 

var myDB = "listaTarefas.json"

var myServer = http.createServer((req, res) => {
    var purl = url.parse(req.url, true)

    console.log(req.method + ' ' + purl.pathname)

    if(req.method == 'GET') {

        if(purl.pathname == '/favicon.ico') {
            fs.readFile("favicon.ico", (erro, data) => {
                if(!erro) {
                    res.writeHead(200, { 'Content-Type': "image/x-icon" })
                    res.write(data)
                }
                res.end()
            })
        } else if((purl.pathname == '/') || (purl.pathname == '/tarefas')) {
            jsonfile.readFile(myDB, (erro, tarefas) => {
                res.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' })
                if (!erro)
                    res.write(pug.renderFile('templates/index.pug', { lista: tarefas }))
                else
                    res.write(pug.renderFile('templates/error.pug', { e: "Erro na leitura da base de dados" }))
                res.end()
            })  
        } else if (purl.pathname == '/w3.css') {
            fs.readFile('stylesheets/w3.css', (erro, data) => {
                if(!erro) {
                    res.writeHead(200, { 'Content-Type': 'text/css' })
                    res.write(data)
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                    res.write(pug.renderFile("<p>Erro: " + erro + "</p>"))
                }
                res.end()
            })
        } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            res.write(pug.renderFile("templates/error.pug", { e: "ERRO: a página '" + purl.pathname.slice(1) + "' não existe" }))
            res.end()
        }

    } else if(req.method == 'POST') {
        if(purl.pathname == "/tarefa") {
            recuperaInfo(req, resultado => {
                jsonfile.readFile(myDB, (erro, tarefas) => {
                    if(!erro) {
                        tarefas.push(resultado)
                        jsonfile.writeFile(myDB, tarefas, erro => {
                            if(erro)
                                console.log(erro)
                            else
                                console.log("Lista de tarefas gravada com sucesso")
                                res.writeHead(302, { "Location": "/" })
                                res.end()
                        })
                    } else {
                        console.log("Não foi possível ler a base de dados")
                    }
                })
            })
        } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            res.write(pug.renderFile("templates/error.pug", { e: "ERRO: a página '" + purl.pathname.slice(1) + "' não existe" }))
            res.end()
        }
        
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' })
        console.log("ERRO: " + req.method + " não suportado")
        res.write(pug.renderFile('templates/error.pug', {e: "ERRO: " + req.method + " não suportado"}))
        res.end()
    }
})

myServer.listen(7777, () => {
    console.log("Servidor à escuta na porta 7777")
})

function recuperaInfo(request, callback) {
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded') {
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', () => {
            callback(parse(body))
        })
    }
}
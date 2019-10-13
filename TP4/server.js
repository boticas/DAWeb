var http = require("http")
var fs = require("fs")
var path = require("path")

var myserver = http.createServer(function (req, res) {
    var partes = req.url.split('/')
    var pag = partes[partes.length - 1]

    if (pag.match("arq2html.xsl")) {
        fs.readFile(path.join("files", "arq2html.xsl"), function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/xsl' })
            res.write(data)
            res.end()
        })
    } else {
        fs.readFile(path.join("files", "arq" + pag + ".xml"), function (err, data) {
            // Se o ficheiro ñ existir, página de erro
            if (err != null) {
                res.writeHead(200, { 'Content-Type': 'text/xml, charset=utf-8' })
                res.write("<h1 style='text-align: center; margin: auto; margin: auto'>Ficheiro inexistente: \"" + pag + "\"</h1>")
                res.end()
                return
                // Se o ficheiro existir, página requerida
            } else {
                res.writeHead(200, { 'Content-Type': 'text/xml, charset=utf-8' })
                res.write(data)
                res.end()
            }
        })
    }
})

myserver.listen(7777)
console.log('Server listening at port 7777...')
//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    pageComplet,
    saveClasses
} = require('./pages')


//configurar nunjucks(templates engine)
const nunjucks = require('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/complet", pageComplet)
.post("/save-classes", saveClasses)
.listen(5500)

//node pasta/pasta/pasta.js, nunjucks/(template),  sql, sqlite, express, npm run dev,
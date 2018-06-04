//aqui eu defino as rotas da app
const express = require('express')

module.exports = function(servidor) { //recebeu o servidor de através do loader como parametro
//API DE ROUTES

 const rotas = express.Router()
 servidor.use('/myApi', rotas)

//rota da api
const ecoPontoService = require('../myApi/ecoPontoService')
ecoPontoService.register(rotas, '/api') //registra na rota informada
}


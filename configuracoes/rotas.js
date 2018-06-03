const express = require('express')

module.exports = function(servidor) { //recebeu o servidor de através do loader como parametro
//API DE ROUTES

 const rotas = express.Router()
 servidor.use('/api', rotas)
}
//aqui eu abro o servidor e entro através de http://localhost:3001/

const porta = 3001
const jsonBody = require('body-parser')
const express = require('express')
const servidor = express()

servidor.use(jsonBody.urlencoded({ extended: true })) //extende para novas funcioalidades
servidor.use(jsonBody.json()) //transforma em json

servidor.listen(porta, () => {
    console.log('App na porta 3001');
}); 

module.exports = servidor //exporta o servidor para as rotas
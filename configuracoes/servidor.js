const porta = 3001
const jsonBody = require('body-parser')
const express = require('express')
const servidor = express()

servidor.use(jsonBody.urlencoded({ extended: true }))
servidor.use(jsonBody.json()) //transforma em json

servidor.listen(porta, () => {
    console.log('App na porta 3001');
}); 

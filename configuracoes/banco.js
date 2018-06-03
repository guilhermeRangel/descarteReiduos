const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/de_ecoPontos') //conecta no banco se nao houver ele cria

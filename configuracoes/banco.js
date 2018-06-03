const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/de_ecoPontos') //conecta no banco se nao houver ele cria

mongoose.Error.messages.general.required = "O atributi '{PATH}' é obrigatorio"
mongoose.Error.messages.String = "'{VALUE}' não é valido para o atributo '{PATH}.'"
mongoose.Error.messages.Number = "'{VALUE}' não é valido para o atributo '{PATH}.'"
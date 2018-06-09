//aqui é onde e feita a conexao do banco noSql e tratados msg de erros referente ao mesmo
//sudo systemctl start mongodb inicia o bd
// mongod inicializa o bd
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/de_ecoPontos') //conecta no banco se nao houver ele cria
mongoose.Error.messages.general.required = "O atributi '{PATH}' é obrigatorio"
mongoose.Error.messages.String = "'{VALUE}' não é valido para o atributo '{PATH}.'"
mongoose.Error.messages.Number = "'{VALUE}' não é valido para o atributo '{PATH}.'"


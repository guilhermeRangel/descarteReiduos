const restful = require('node-restful') //pacote para expor REST

const mongoose = restful.mongoose

const ecoPontos = new mongoose.Schema({
    nome: { type: String, require: true, uppercase: true},
    rua: { type: String, require: true, uppercase: true },
    numero: { type: Number, require: true },
    bairro: { type: String, require: true, uppercase: true },
    telefone: { type: Number, require: false },
    cep: { type: String, require: false },
    latitude: { type: Number, require: false },
    longitude: { type: Number, require: false }
})

module.exports = restful.model('ecoPontos', ecoPontos) //exporta como ecoPonst
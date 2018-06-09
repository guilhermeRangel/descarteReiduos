//aqui eu defini como sera o esquema do banco de dados
const _ = require('lodash')
const restful = require('node-restful') //pacote para expor REST
const mongoose = restful.mongoose

const ecoPontos = new mongoose.Schema({
    nome: { type: String, required: [true, 'Informe o Nome do Destino '], uppercase: true },
    rua: { type: String, required: [true, 'Informe o nome da rua '], uppercase: true },
    numero: { type: Number, required: [true, 'Informe o numero! '] },
    bairro: { type: String, required: [true, 'Informe o bairro '], uppercase: true },
    telefone: { type: Number, required: false },
    cep: { type: String, required: false },
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false }
})

        
      

module.exports = restful.model('ecoPontos', ecoPontos) //exporta como ecoPonst
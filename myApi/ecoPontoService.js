const ecoPontos = require('./ecoPontos')

ecoPontos.methods(['get', 'post', 'put', 'delete'])
ecoPontos.updateOptions({new: true, runValidators: true}) //cria um novo obj e valida
module.exports = ecoPontos


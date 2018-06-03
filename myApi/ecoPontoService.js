const ecoPontos = require('./ecoPontos')

ecoPontos.methods(['get', 'post', 'put', 'delete'])
ecoPontos.updateOptions({new: true, runValidators: true}) //put retorna um novo obj

ecoPontos.route('countObj', function(req, res, next) {
    ecoPontos.count(function(erro, valor){
        if(erro) {
            res.status(500).json({errors: [erro]})
        } else {
            res.json({valor})
        }
    })
})

module.exports = ecoPontos


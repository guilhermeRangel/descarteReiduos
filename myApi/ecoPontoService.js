const ecoPontos = require('./ecoPontos')
const _ = require('lodash')
ecoPontos.methods(['get', 'post', 'put', 'delete'])
ecoPontos.updateOptions({new: true, runValidators: true}) //put retorna um novo obj

ecoPontos.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle //contem os erros 
    if(bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestFulErrors){
    const errors = []
    _.forIn(nodeRestFulErrors, error => errors.push(error.message))
    return errors
}



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


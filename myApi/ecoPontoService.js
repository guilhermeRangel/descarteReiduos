const ecoPontos = require('./ecoPontos')
const _ = require('lodash')
const fs = require('fs')
const csv = require('fast-csv')

ecoPontos.methods(['get', 'post', 'put', 'delete'])
ecoPontos.updateOptions({new: true, runValidators: true}) //put retorna um novo obj

ecoPontos.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bndle = res.locals.bundle //contem os erros 
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



ecoPontos.route('countObjos', function(req, res, next) {
    ecoPontos.count(function(erro, valor){
        if(erro) {
            res.status(500).json({errors: [erro]})
        } else {
            res.json({valor})
        }
    })
})


function csvToJson() {
    var stringJson = []
    const strem = fs.createReadStream('ECPS.csv') //le o arquivo
    const streamCsv = csv({
        ignoreEmpty : true
    }).on('data', data => {
        stringJson = JSON.stringify(data)
    })
    strem.pipe(streamCsv)
}







module.exports = ecoPontos


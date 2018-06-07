const ecoPontos = require('./ecoPontos')
const _ = require('lodash')
const fs = require('fs')
const csv = require('fast-csv')
const csvToJson = require('convert-csv-to-json')

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



ecoPontos.route('countObjos', function(req, res, next) { //paginacao para o front
    ecoPontos.count(function(erro, valor){
        if(erro) {
            res.status(500).json({errors: [erro]})
        } else { 
            res.json({valor})
        }
    })
})





function CsvToJson () {
var fileInputName = 'arquivo.csv'
var fileOutputName = 'outArquivo.json' 

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName)
}






module.exports = ecoPontos


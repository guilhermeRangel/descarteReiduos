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



ecoPontos.route('countObjos', function(req, res, next) { //paginacao para o front
    ecoPontos.count(function(erro, valor){
        if(erro) {
            res.status(500).json({errors: [erro]})
        } else {
            csvToJson() 
            res.json({valor})
        }
    })
})


/*ecoPontos.route('findAll', function(req, res, next) {
   _.toString(function(erro, valor){
        if(erro) {
            res.status(500).json({errors: [erro]})
        } else {
            res.json({valor})
        }
        
    })
})

*/


function csvToJson() {
    var stringJson = []
    const strem = fs.createReadStream('arquivo.csv') //le o arquivo'
    const streamCsv = csv({
        ignoreEmpty : true
    }).on('data', data => {
        dados = JSON.stringify(data)
        console.log(dados)
    })
    strem.pipe(streamCsv)
}






module.exports = ecoPontos


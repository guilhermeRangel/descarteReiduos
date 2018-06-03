const ecoPontos = require('./ecoPontos')

class Persistencia {
    //Funcao assincrona que retorna uma promisse
    static buscaTodos() {
        let consultaTodos = ecoPontos.find({})
        return consultaTodos.exec() //retorno da promisse
    }


    static buscaRua(rua) {
        let consultaPorRua = ecoPontos.find().populate('rua')
        return consultaPorRua.exec()
    }



}

module.exports = Persistencia

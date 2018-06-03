const servidor = require('./configuracoes/servidor') //aqui recebeu o servidor na porta 3001
require('./configuracoes/banco')
require('./configuracoes/rotas')(servidor) //arqui passou o servidor para as rotas, esperando o retorno da funcao
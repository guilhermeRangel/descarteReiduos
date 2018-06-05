//aqui é onde eu inicializo o meu arquivo atraves do comando npm run dev definido no package.json

const servidor = require('./configuracoes/servidor') //aqui recebeu o servidor na porta 3001
require('./configuracoes/banco')
require('./configuracoes/rotas')(servidor) //arqui passou o servidor para as rotas, esperando o retorno da funcao
require('./myApi/ecoPontoService')
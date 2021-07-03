# AplicacaoWebDiarioPessoal-Node.js-Express-JWT-Sequelize-MySQL

Criei essa API para poder registrar pensamentos, documentos e etc com a data de criaçao e da ultima atualizaçao.   
Por meio da autenticação, Só o usuario criador dos registros pode visualizalos posteriormente.

Esta aplicação permite:

  Cadastro de usuarios -> post(/users) -> parametros recebidos: (name,email,password)
  Autenticação de usuarios -> post(/login) -> parametros recebidos: (email,password)
  Cadastro de Registros -> post(/registers) -> parametros recebidos: (contents)
  Consulta de registros por usuario -> get(/registers) -> parametros recebidos: ()

O código contem apenas o back-end do servidor, use o Insomnia para fazer os requests.          
Para acessar as rotas de cadastro e consulta de registros, o usuário precisa estar autenticado.         
(usar o token gerado na criação do usuario para fazer as requests).     
      
Para iniciar a Aplicaçao:    
configurar credenciais do banco de dados em src/config/database.js.
digitar o comando "npm i" para baixar as dependencias.   
digitar o comando "yarn sequelize db:migrate" para criar o banco de dados.     
digitar "npm src/server.js" para iniciar o servidor.    

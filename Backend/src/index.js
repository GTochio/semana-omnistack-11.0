const express = require('express');
const routes  = require('./routes');

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar Uma Informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * Delete: Deletar uma informação no Backend
  *//*
  *Tipos de Parâmetro
  * 
  * Query Params: Parâmetros nomeado na rota Após""?0" Filtros, Paginação
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizaado para Criar ou alterar Recursos
  */
 /**
  * SQL: Mysql, sqlLite, Oracle, Microsoft
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder:  table('users).select('*').where()
   */


app.listen(3333);

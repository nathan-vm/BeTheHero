const express = require('express')
const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionControlles = require('./controllers/SessionController')

//Login
routes.post('/session',SessionControlles.create)
// Cadastrar e listar ongs
routes.get('/ongs',OngController.index)
routes.post('/ongs',OngController.create)
// listar casos de uma ong especifica
routes.get('/profile',ProfileController.index)
// Criar listar e deletar casos
routes.get('/incidents',IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)
module.exports = routes
const express = require('express')
const {celebrate,Segments,Joi} = require('celebrate')
const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionControlles = require('./controllers/SessionController')

//Login
routes.post('/session',SessionControlles.create)

// Cadastrar e listar ongs
routes.get('/ongs',OngController.index)
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)
    })
}),OngController.create)

// listar casos de uma ong especifica
routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization:Joi.string().required(),
    }).unknown()
}),ProfileController.index)

// Criar listar e deletar casos
routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),IncidentController.index)

routes.post('/incidents',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
    [Segments.BODY]:Joi.object().keys({
        title:Joi.string(),
        description: Joi.string(),
        value:Joi.number()
    })
}), IncidentController.create)

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required()
    })
}),IncidentController.delete)

module.exports = routes
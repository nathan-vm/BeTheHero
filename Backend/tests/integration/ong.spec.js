const request = require('supertest')
const app = require('../../src/app')
describe('ong',()=>{
    it('shoud be be able to create a new ONG', async()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"APAD",
            email:"contato@contato.com",
            whatsapp:"11000000000",
            city:"Cidade",
            uf:"UF",
        })

        console.log(response.body)
    })
})


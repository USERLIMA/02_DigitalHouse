const express = require('express')

const servidor = express()

const porta = 3001

servidor.use(express.json())

servidor.get('/', (_, res) => {
    res.send("Você está na página de aplicação")
})

servidor.get('/usuario', (_, res) => {
    const usuariosSite = [
        {
            nome: "Caio",
            idade: 21,
            data: new Date()

        },
        {
            nome: "joão",
            idade: 21,
            data: new Date()

        },
        {
            nome: "Bastião",
            idade: 21,
            data: new Date()

        },
    ]
    res.send(usuariosSite)
})

servidor.post('/autenticacao', (req,res) => {
    const { idade } = request.body
    if (idade>18) {
        res.send("Está liberado!")
    } else {
        res.send("Não está liberado!")
    }
})

servidor.listen(porta, () => console.log('O servidor está rodando na porta ${porta}'))


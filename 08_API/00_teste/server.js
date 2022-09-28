const express = require('express');

const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(userRoutes)

app.get('/', (request, response) =>
 response.json({mensagem: 'API está funcionando!'}))

app.use('/users', userRoutes)

app.listen(5555, () =>
 console.log('Servidor funcionando em http://localhost:5555'));


const express = require('express');
const mongoose = require('mongoose');
//ROTAS
const rotaUsuario = require('./rotas/rotaUsuario');

const app = express();
app.use(express.json());
/* mongodb+srv://usuario_admin:root@apisimples-xtlke.mongodb.net/test?retryWrites=true&w=majority */
const url = "mongodb+srv://usuario_admin:root@cluster0-xtlke.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true
});
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexao com bd', err)
})
mongoose.connection.on('disconected', () => {
    console.log('Banco de dados desconectado')
})
mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados')
})

app.use('/usuario', rotaUsuario);

let porta = 8080;
app.listen(porta, () => {
    console.log(`Api rodando na porta ${porta}`)
})
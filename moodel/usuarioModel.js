const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    }
})
module.exports = model('usuario', usuarioSchema)
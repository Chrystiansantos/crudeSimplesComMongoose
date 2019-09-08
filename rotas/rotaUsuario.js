const express = require('express');
const routes = express.Router();
const usuarioController = require('../controller/usuarioController');

routes.post('/', (req, res) => {
    let usuario = new usuarioController();
    usuario.cadastarUsuario(req, res);
})
routes.get('/', (req, res) => {
    let usuario = new usuarioController();
    usuario.retornarUsuarios(res)
})
routes.delete('/:id', (req, res) => {
    let usuario = new usuarioController()
    usuario.deleteBydId(req, res)
})
routes.put('/', (req, res) => {
    let usuario = new usuarioController();
    usuario.alterarUsuario(req, res)
})

module.exports = routes;
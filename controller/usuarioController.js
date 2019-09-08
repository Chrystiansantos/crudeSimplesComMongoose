const modelUsuario = require('../moodel/usuarioModel');

class UsuarioController {
    async cadastarUsuario(req, res) {
        let { cpf, nome, dataNascimento } = req.body

        if (cpf == '' || nome == '' || dataNascimento == '') {
            res.json({ msg: "Informe dados validos" })
        } else {
            const usuarios = await this.retornarUsuarios();
            var cpfJacadastrado;
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].cpf == cpf) cpfJacadastrado = true;
            }
            if (cpfJacadastrado) {
                res.json({ msg: "Cpf ja cadastrado" })
            } else {
                try {
                    let result = await modelUsuario.create(req.body)
                    res.json(result)
                } catch (err) {
                    console.log(err)
                    res.send('Deu ruim')
                }
            }
        }
    }
    async retornarUsuarios(res) {
        if (res == undefined) {
            const usuarios = await modelUsuario.find();
            return usuarios;
        } else {
            const usuarios = await modelUsuario.find();
            res.json(usuarios)
        }
    }
    async deleteBydId(req, res) {
        let { id } = req.params;
        try {
            const usuarios = await modelUsuario.deleteOne({ _id: id })
            res.json({ msg: 'Deletado com sucesso !' })
        } catch (err) {
            res.send(err)
        }

    }
    async alterarUsuario(req, res) {
        let { id, nome, dataNascimento, cpf } = req.body;
        try {
            const usuario = await modelUsuario.updateOne({ _id: id }, {
                $set: {
                    nome: nome,
                    dataNascimento: dataNascimento,
                    cpf: cpf
                }
            })
            res.json({ msg: "Usuario alterado com sucesso !" })
        } catch (err) {
            res.send('Deu ruim', err)
        }
    }
}


module.exports = UsuarioController;
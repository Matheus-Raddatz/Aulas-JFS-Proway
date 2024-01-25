const ModelLocal = require('../modelos/mdlocal')
var mLocal
(async () => mLocal = await ModelLocal())()
module.exports = {
    async consultarLc(req, res) {
        try {
            const lista = await mLocal.findAll()
            res.status(200).send(lista)
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    async consultarPorIDLc(req, res) {
        try {
            const lista = await mLocal.findAll({ id: req.params.idlocal })
            res.status(200).send(lista[0])
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    async cadastrarLc(req, res) {
        try {
            let local = {
                nome: req.body.nome,
                rua: req.body.rua,
                bairro: req.body.bairro,
                fone: req.body.fone
            }
            const newLocal = await mLocal.create(local)
            res.status(200).send("Local cadastrado com sucesso")
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    async atualizarLc(req, res) {
        try {
            const local = await mLocal.update({
                nome: req.body.nome,
                rua: req.body.rua,
                bairro: req.body.bairro,
                fone: req.body.fone
            },
                {
                    where: { id: req.params.idlocal }
                })
            res.status(200).send("Local alterado com sucesso")
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    async deletarLc(req, res) {
        try {
            await mLocal.destroy({
                where: { id: req.params.idlocal }
            })
            res.status(200).send("Local deletado com sucesso")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}
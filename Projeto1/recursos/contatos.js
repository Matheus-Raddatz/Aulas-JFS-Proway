const ModelContato = require("../modelos/mdcontato")
const pool = require("../utils/conexaobd")
const jwt = require('jsonwebtoken')
var mContato
(async () => mContato = await ModelContato())()

module.exports = {
    async consultarCt(req, res) {
        try {
            let token = req.headers['x-access-token']
            let decoded = jwt.verify(token, "123")
            const lista = await mContato.findAll({ iduser: decoded.id })
            res.status(200).send(lista)
        } catch (error) {
            res.status(400).send(error.message)
        }
    },
    async consultarPorIDCt(req, res) {
        try {
            let token = req.headers['x-access-token']
            let decoded = jwt.verify(token, "123")
            let client = await pool.connect()
            let result = await client.query(`select * from tb_contatos where id = ${req.params.idcontato} and iduser = ${decoded.id}`)
            res.send(result.rows)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async cadastrarCt(req, res) {
        try {
            let token = req.headers['x-access-token']
            let decoded = jwt.verify(token, "123")
            let sql = "insert into tb_contatos (nome, email, fone, iduser) values ($1, $2, $3, $4)"
            let dados = [req.body.nome, req.body.email, req.body.fone, decoded.id]
            let client = await pool.connect()
            let result = await client.query(sql, dados)
            res.send('Contato cadastrado')
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async atualizarCt(req, res) {
        try {
            let token = req.headers['x-access-token']
            let decoded = jwt.verify(token, "123")
            let sql = `update tb_contatos set nome = $2, email = $3, fone = $4 where id = $1 and iduser = ${decoded.id}`
            let dados = [req.params.idcontato, req.body.nome, req.body.email, req.body.fone]
            let client = await pool.connect()
            let result = await client.query(sql, dados)
            return res.status(200).send('Contato atualizado com sucesso')
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async deletarCt(req, res) {
        try {
            let token = req.headers['x-access-token']
            let decoded = jwt.verify(token, "123")
            let client = await pool.connect()
            let teste = await client.query(`select * from tb_contatos where id = ${req.params.idcontato}`)
            if (teste.rows.length > 0) {
                let result = await client.query(`delete from tb_contatos where id = ${req.params.idcontato} and iduser = ${decoded.id}`)
                return res.status(200).send('Contato deletado com sucesso')
            }
            return res.status(400).send('Não existe um contato com este ID')
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
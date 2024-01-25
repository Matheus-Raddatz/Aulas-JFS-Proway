const pool = require('../utils/conexaobd')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async gravar(req, res) {
        try {
            let client = await pool.connect()
            // verifica se o usuário já existe
            let result = await client.query('select * from tb_users where email = $1', [req.body.email])
            console.log(result.rows)
            if (result.rows.length > 0) {
                return res.status(400).send('Já existe um usuário com este email')
            }
            // insere o novo usuário
            let hash = await bcrypt.hash(req.body.senha, 10)
            let sql = 'insert into tb_users(nome, email, senha, perfil) values ($1, $2, $3, $4)'
            let dados = [req.body.nome, req.body.email, hash, req.body.perfil]
            await client.query(sql, dados)
            res.status(201).send('Usuário cadastrado com sucesso')
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async logar(req, res) {
        try {
            let client = await pool.connect()
            let result = await client.query('select * from tb_users where email = $1', [req.body.email])
            if (result.rows.length == 0) {
                return res.status(400).send('Usuário ou senha inválido(a)')
            }
            let ok = await bcrypt.compare(req.body.senha, result.rows[0].senha)
            if (ok) {
                let token = await jwt.sign({
                    id: result.rows[0].id,
                    nome: result.rows[0].nome,
                    email: result.rows[0].email,
                    perfil: result.rows[0].perfil
                }, "123")
                res.status(200).send({token})
            } else {
                res.status(400).send('Usuário ou senha inválido(a)')
            }
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
const pool = require('../utils/conexaobd')
module.exports = async (req, res, next) => {
    let client = await pool.connect()
    if (req.body.nome !== "" && req.body.email !== "" && req.body.fone !== "") {
        if (!req.params.idcontato) {
            // se tiver cadastrando entra aqui
            let result = await client.query(`select * from tb_contatos where email = ${req.body.email}`)
            if (result.rows.length > 0) {
                return res.status(400).send('Já existe um contato com este email')
            }
        } else {
            // se tiver editando entra aqui
            let result = await client.query(`select * from tb_contatos where id = ${req.params.idcontato}`)
            if (result.rows.length == 0) {
                return res.status(400).send('Não existe um contato com este ID')
            }
        }
        // se todos os dados forem informados segue o código
        next()
    } else {
        // se faltarem dados pede para informar
        return res.status(400).send('Favor informar todos os dados')
    }
}
const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token']
        if (token == null) {
            return res.status(400).send('Você precisa estar logado para executar esta operação')
        }
        await jwt.verify(token, "123")
        next()
    } catch (error) {
        return res.status(400).send(error)
    }
}
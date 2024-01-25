const express = require('express')
const app = express()
const router = express.Router()
const moduleContatos = require('./recursos/contatos')
const moduleLocais = require('./recursos/locais')
const moduleUsuarios = require('./recursos/usuarios')
const mdLogin = require('./middlewares/mwlogin')
const mdContato = require('./middlewares/mwcontato')

app.use(express.json())
app.use(router)

router.post('/usuarios', moduleUsuarios.gravar)
router.post('/usuarios/login', moduleUsuarios.logar)

router.get('/contatos', mdLogin, moduleContatos.consultarCt)
router.get('/contatos/:idcontato', mdLogin, moduleContatos.consultarPorIDCt)
router.post('/contatos', mdLogin, mdContato, moduleContatos.cadastrarCt)
router.put('/contatos/:idcontato', mdLogin, mdContato, moduleContatos.atualizarCt)
router.delete('/contatos/:idcontato', mdLogin, moduleContatos.deletarCt)

router.get('/locais', moduleLocais.consultarLc)
router.get('/locais/:idlocal', moduleLocais.consultarPorIDLc)
router.post('/locais', moduleLocais.cadastrarLc)
router.put('/locais/:idlocal', moduleLocais.atualizarLc)
router.delete('/locais/:idlocal', moduleLocais.deletarLc)

module.exports = router
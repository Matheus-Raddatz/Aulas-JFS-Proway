var express = require('express');
const { Model, DataTypes, Sequelize } = require('sequelize');
var router = express.Router();
const ModelUser = require('../models/mduser')
const sequelize = new Sequelize('agenda', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

var mUser
(async () => mUser = await ModelUser())()

function getUser(id){
  for (let i = 0; i < usersLista.length; i++) {
    if (usersLista[i].id == id) {
      return usersLista[i]
    }
  }
  return ''
}

router.get('/', async function (req, res, next) {
  await sequelize.sync()
  let usersLista = await mUser.findAll()
  res.render('users', { title: 'Lista Users', lista: usersLista });
});

router.get('/cadastro', function (req, res, next) {
  res.render('cadUser', { title: 'Cadastro de Usuário' });
});

router.post('/cadastro', async function (req, res, next) {
  await mUser.create({ nome: req.body.nome, email: req.body.email })
  let usersLista = await mUser.findAll()
  res.render('users', { title: 'Lista Users', lista: usersLista });
});

router.get('/excluir/:iduser', async function (req, res, next) {
  await mUser.destroy({ where: { id: req.params.iduser } })
  let usersLista = await mUser.findAll()
  res.render('users', { title: 'Lista Users', lista: usersLista})
})

router.get('/editar/:iduser', async function (req, res, next) {
  let user = await mUser.findOne({ where: {id: req.params.iduser} })
  res.render('editaUser', { title: 'Editar Usuário', user: user })
})

router.post('/editar/:iduser', async function (req, res, next) {
  await mUser.update({ nome: req.body.nome, email: req.body.email }, { where: { id: req.params.iduser } })
  let usersLista = await mUser.findAll()
  res.render('users', { title: 'Lista users', lista: usersLista })
})

module.exports = router;

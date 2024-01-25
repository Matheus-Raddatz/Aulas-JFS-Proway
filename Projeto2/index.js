const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sq_database', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

async function conectar() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

//conectar()

async function ModelUser() {
    const User = sequelize.define('tb_users', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        perfil: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
    //await sequelize.sync({force: true})
    return User
}

//ModelUser()

async function createUser() {
    const User = await ModelUser()
    const Maria = User.create({
        nome: 'Maria',
        email: 'maria@gmail.com',
        senha: '123',
        perfil: 'ADM'
    })
    const Jose = User.create({
        nome: 'Jose',
        email: 'jose@gmail.com',
        senha: '123',
        perfil: 'OP'
    })
    console.log(Maria)
    console.log(Jose)
}

//createUser()

async function consultaUserSing() {
    const User = await ModelUser()
    const lista = await User.findAll({
        attributes: ['nome', 'perfil'],
        where: { nome: 'Jose' }
    })
    lista.map(user => console.log(user.nome, user.perfil, user.email))
}

//consultaUserSing()

async function updateUser() {
    const User = await ModelUser()
    const Tereza = await User.update({
        nome: 'Tereza',
        email: 'tereza@gmail.com',
        perfil: 'OP'
    },
    {
        where: { nome: 'Maria' }
    })
    console.log(Tereza);
}

//updateUser()

async function deleteUser() {
    const User = await ModelUser()
    await User.destroy({
        where: { nome: 'Tereza' }
    })
}

deleteUser()
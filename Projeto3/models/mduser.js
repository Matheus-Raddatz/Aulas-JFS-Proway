const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('agenda', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

const ModelUsuario = async () => {
    const Usuario = sequelize.define('tb_usuarios', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    await sequelize.sync({ force: false })
    return Usuario
}

module.exports = ModelUsuario
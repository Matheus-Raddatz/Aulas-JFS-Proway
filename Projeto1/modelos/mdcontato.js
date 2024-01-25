const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('agenda', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

const ModelContato = async () => {
    const Contato = sequelize.define('tb_contatos', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        iduser: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    await sequelize.sync({ force: false })
    return Contato
}
module.exports = ModelContato
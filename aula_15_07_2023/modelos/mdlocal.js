const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('agenda', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

const ModelLocal = async () => {
    const Local = sequelize.define('tb_locais', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rua: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    await sequelize.sync({ force: false })
    return Local
}
module.exports = ModelLocal
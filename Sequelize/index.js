const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('agenda', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

async function conectar() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function ModelUsuario() {
    const Usuario = sequelize.define('tb_usuarios', {
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
        }
    })
    await Usuario.sync({ force: false })
    return Usuario
}

async function ModelContato() {
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

function CriarBase() {
    const Usuario = ModelUsuario()
    const Contato = ModelContato()
    Usuario.hasMany(Contato)
    sequelize.sync({ force: false })
}

class User extends Model { }
User.init(
    {
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
        }
    },
    {
        sequelize
    }
)

class Contato extends Model { }
Contato.init(
    {
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
    },
    {
        sequelize
    }
)

User.hasMany(Contato)
sequelize.sync()
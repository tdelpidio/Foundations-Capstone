require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorize: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE users(
            user_id serial primary key,  
            email varchar(50)
        );

        INSERT INTO users (email)
        values (abc@gmail.com),
        (123@yahoo.com)
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}

        

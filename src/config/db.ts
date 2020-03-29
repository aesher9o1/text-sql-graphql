import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('trainings', 'root', '', {
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err)
    )


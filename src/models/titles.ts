/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'
class TitlesModel extends Model {
    public emp_no!: number
    public title!: string
    public from_date!: Date
    public to_date: Date

}

TitlesModel.init({
    emp_no: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.CHAR,
        allowNull: false,
        primaryKey: true
    },
    from_date: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true
    },
    to_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize: sequelize,
    tableName: 'titles'
})

export default TitlesModel
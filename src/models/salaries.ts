/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'
class SalariesModel extends Model {
    public emp_no!: number
    public salary!: number
    public from_date!: Date
    public to_date!: Date

}

SalariesModel.init({
    emp_no: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    from_date: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true
    },
    to_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'salaries'
})

export default SalariesModel
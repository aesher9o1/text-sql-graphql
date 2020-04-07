/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'

export enum GENDERS {
    'M',
    'F'
}
class EmployeesModel extends Model {
    public emp_no!: number
    public birth_date!: Date
    public first_name!: string
    public last_name!: string
    public gender!: GENDERS
    public hire_date!: Date
}

EmployeesModel.init({
    emp_no: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    first_name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    last_name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("M", "F"),
        allowNull: false
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize: sequelize,
    tableName: 'employees'
})

export default EmployeesModel
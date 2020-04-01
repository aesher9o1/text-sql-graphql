/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'

class Departments extends Model {
    public dept_no!: string
    public dept_name!: string
}

Departments.init({
    dept_no: {
        type: DataTypes.CHAR(11),
        primaryKey: true,
        allowNull: false
    },
    dept_name: {
        type: DataTypes.STRING(40)
    }
}, {
    sequelize: sequelize,
    tableName: 'departments'
})

export default Departments
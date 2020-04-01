/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'


class CurrentDeptEmp extends Model {
    public emp_no!: number
    public dept_no!: string
    public from_date: Date
    public to_date: Date
}


CurrentDeptEmp.init({
    id: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    dept_no: {
        type: DataTypes.CHAR(4),
        allowNull: false
    },
    from_date: {
        type: DataTypes.DATE
    },
    to_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize: sequelize,
    tableName: 'current_dept_emp'
})

export default CurrentDeptEmp
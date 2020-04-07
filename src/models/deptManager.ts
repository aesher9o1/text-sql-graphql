/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'
class DeptManagerModel extends Model {
    public emp_no!: number
    public dept_no !: string
    public from_date!: Date
    public to_date!: Date

}

DeptManagerModel.init({
    emp_no: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    dept_no: {
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
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'dept_manager'
})

export default DeptManagerModel
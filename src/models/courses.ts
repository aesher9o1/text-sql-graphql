/* eslint-disable @typescript-eslint/camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db'

export enum COURSE_TYPES {
    'regular',
    'specialization',
    'specialization-part'
}

class CourseModel extends Model {
    public id!: number
    public name!: string
    public url!: string
    public type!: COURSE_TYPES
    public vtc_url!: string
    public is_vtc_training!: number
    public duration!: number
    public current_version_id!: number
    public new_lms_version_id!: number
    public new_exercises_version_id: number
    public chat_id!: number
    public chat_app_id: string
    public chat_agent_id: string
    public vimeo_project_id: number
    public homepage_order!: number
    public is_new_training!: number
    public signup_active!: number
    public course_active!: number
    public is_kit!: number
    public stop_signup_before_days!: number
    public created_at!: Date
    public last_updated_at!: Date
}


CourseModel.init({
    id: {
        type: DataTypes.INTEGER({ length: 11 }),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    url: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('regular', 'specialization', 'specialization-part'),
        allowNull: false
    },
    vtc_url: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    is_vtc_training: {
        type: DataTypes.TINYINT({ length: 1 }),
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    current_version_id: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    new_lms_version_id: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    new_exercises_version_id: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: true
    },
    chat_id: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    chat_app_id: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    chat_agent_id: {
        type: DataTypes.CHAR,
        allowNull: true
    },
    vimeo_project_id: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: true
    },
    homepage_order: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    is_new_training: {
        type: DataTypes.TINYINT({ length: 1 }),
        allowNull: false
    },
    signup_active: {
        type: DataTypes.TINYINT({ length: 4 }),
        allowNull: false
    },
    course_active: {
        type: DataTypes.TINYINT({ length: 1 }),
        allowNull: false
    },
    is_kit: {
        type: DataTypes.TINYINT({ length: 1 }),
        allowNull: false
    },
    stop_signup_before_days: {
        type: DataTypes.INTEGER({ length: 11 }),
        allowNull: false
    },
    created_at: {
        type: DataTypes.TIME,
        defaultValue: "2001-01-01 00:00:00",
        allowNull: false
    },
    last_updated_at: {
        type: DataTypes.TIME,
        defaultValue: new Date(),
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'courses'
})

export default CourseModel
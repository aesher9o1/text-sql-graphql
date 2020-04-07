import { gql } from 'apollo-server-express';

import CourseSchema from './course'
import DepartmentSchema from './department'
import DeptEmpSchema from './deptEmp'
import DeptManagerSchema from './deptManager'
import EmployeeSchema from './employee'
import SalarySchema from './salary'
import TitleSchema from './title'


const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;


export default [
    linkSchema,
    CourseSchema,
    DepartmentSchema,
    DeptEmpSchema,
    DeptManagerSchema,
    EmployeeSchema,
    SalarySchema,
    TitleSchema
]
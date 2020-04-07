import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        deptEmployees: [DeptEmployee]!
    }

    type DeptEmployee {
        emp_no: ID!
        dept_no: String!
        from_date: Date!
        to_date: Date! 
    }
`
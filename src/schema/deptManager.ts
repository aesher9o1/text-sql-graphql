import { gql } from 'apollo-server'

export default gql`
    scalar Date
    type Query {
        deptManagers: [DeptManager]!
    }

    type DeptManager {
        emp_no: ID!
        dept_no: String!
        from_date: Date!
        to_date: Date! 
    }
`
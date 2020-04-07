import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        employees: [Employee]!
    }

    type Employee {
        emp_no: ID!
        birth_date: Date!
        first_name: String!
        last_name: String!
        gender: String!
        hire_date: Date!
    }
`
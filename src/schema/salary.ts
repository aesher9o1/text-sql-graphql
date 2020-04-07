import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        salaries: [Salary]!
    }

    type Salary {
        emp_no: ID!
        salary: Int!
        from_date: Date!
        to_date: Date! 
    }
`
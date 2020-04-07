import { gql } from 'apollo-server'

export default gql`
    scalar Date
    type Query {
        salaries: [Salary]!
    }

    type Salary {
        emp_no: ID!
        salary: Number!
        from_date: Date!
        to_date: Date! 
    }
`
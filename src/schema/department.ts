import { gql } from 'apollo-server'

export default gql`
    type Query {
        departments: [Department]!
    }
    type Department {
        dept_no: ID!
        dept_name: String!
        from_date: Date
        to_date: Date
    }
`


import { gql } from 'apollo-server'

export default gql`
    extend type Query {
        titles: [Title]!
    }

    type Title {
        emp_no: ID!
        title: String!
        from_date: Date!
        to_date: Date
    }
`
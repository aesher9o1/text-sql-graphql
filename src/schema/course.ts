import { gql } from 'apollo-server'

const CourseSchema = gql`
    scalar Date
    type Query {
        courses: [Course]!
        course(id: ID!, email:String!): Course
    }

    "The course table contains all the courses that internshala has currently"
    type Course {
        id: ID!
        name: String!
        url: String!
        type: String! 
        duration: Int!
        current_version_id: Int!
        new_lms_version_id: Int!
        new_exercises_version_id: Int!
        chat_id: Int!
        chat_app_id: String
        chat_agent_id: String
        vimeo_project_id: Int
        homepage_order: Int!
        is_new_training: Int!
        signup_active: Int!
        course_active: Int!
        is_kit: Int!
        stop_signup_before_days: Int!
        "asdas"
        created_at: Date!
        last_updated_at: Date!
    }
`

export default CourseSchema
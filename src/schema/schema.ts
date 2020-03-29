import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql'
import { CourseModel } from '../models/courses'
import { sequelize } from '../const/db'

const Courses = new GraphQLObjectType({
    name: 'Courses',
    description: 'This database has all the courses',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(course): number {
                    return course.id
                }
            },
            name: {
                type: GraphQLString,
                resolve(course): string {
                    return course.name
                }
            }
        }
    }
})


const CoursesQuery = new GraphQLObjectType({
    name: 'Query',
    description: "Root query",
    fields: () => {
        return {
            courses: {
                type: new GraphQLList(Courses),
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args) {
                    return CourseModel.findAll()
                }
            }
        }
    }
})


const Schema = new GraphQLSchema({
    query: CoursesQuery
})

export default Schema
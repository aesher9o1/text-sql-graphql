import { CourseModel } from '../models'

export default {
    Query: {
        courses: async () => await CourseModel.findAll()
    }
}

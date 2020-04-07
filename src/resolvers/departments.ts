import { DepartmentModel } from '../models'

export default {
    Query: {
        courses: async () => await DepartmentModel.findAll()
    }
}

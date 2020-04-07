import { EmployeesModel } from '../models'

export default {
    Query: {
        courses: async () => await EmployeesModel.findAll()
    }
}

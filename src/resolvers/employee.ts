import { EmployeesModel } from '../models'

export default {
    Query: {
        employees: async () => await EmployeesModel.findAll({
            limit: 100
        })
    }
}

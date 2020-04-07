import { DepartmentModel } from '../models'

export default {
    Query: {
        departments: async () => await DepartmentModel.findAll({
            limit: 100
        })
    }
}

import { DeptEmpModel } from '../models'

export default {
    Query: {
        deptEmployees: async () => await DeptEmpModel.findAll({
            limit: 100
        })
    }
}

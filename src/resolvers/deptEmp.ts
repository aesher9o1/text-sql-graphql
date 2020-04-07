import { DeptEmpModel } from '../models'

export default {
    Query: {
        courses: async () => await DeptEmpModel.findAll()
    }
}

import { DeptManagerModel } from '../models'

export default {
    Query: {
        courses: async () => await DeptManagerModel.findAll()
    }
}

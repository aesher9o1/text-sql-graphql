import { SalariesModel } from '../models'

export default {
    Query: {
        courses: async () => await SalariesModel.findAll()
    }
}

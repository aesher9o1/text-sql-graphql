import { SalariesModel } from '../models'

export default {
    Query: {
        salaries: async () => await SalariesModel.findAll({
            limit: 100
        })
    }
}

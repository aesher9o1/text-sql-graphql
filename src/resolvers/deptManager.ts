import { DeptManagerModel } from '../models'

export default {
    Query: {
        deptManagers: async () => await DeptManagerModel.findAll({
            limit: 100
        })
    }
}

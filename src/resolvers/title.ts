import { TitlesModel } from '../models'

export default {
    Query: {
        titles: async () => await TitlesModel.findAll({
            limit: 100
        })
    }
}

import { TitlesModel } from '../models'

export default {
    Query: {
        courses: async () => await TitlesModel.findAll()
    }
}

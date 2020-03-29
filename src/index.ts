import Schema from './schema/schema'

import express from 'express'
import graphqlHTTP from 'express-graphql'



const app = express();
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
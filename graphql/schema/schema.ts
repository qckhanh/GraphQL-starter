import { buildSchema } from 'graphql/utilities';
import { Source } from 'graphql/language';

export const schema = buildSchema(`
 type Query {
    hello: String
 }
`);

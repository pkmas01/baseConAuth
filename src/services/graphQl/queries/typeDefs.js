import { gql } from '@apollo/client';

const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        isAuthenticated: Boolean!
        token: String!
    }
`;
export default typeDefs;

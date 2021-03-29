import { gql } from '@apollo/client';

const IS_AUTH = gql`
    query isAuthenticated {
        isAuthenticated @client
    }
`;


export default IS_AUTH;

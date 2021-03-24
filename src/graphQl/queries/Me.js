import { gql } from '@apollo/client';

const ME = gql`
    query me{
        me{
            name,
            lastName,
            username,
            imageUrl,
            id
        }
    }
`;

export default ME;

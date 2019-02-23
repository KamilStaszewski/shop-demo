import { gql } from 'apollo-boost';

const getItemsQuery = gql`
    {
        items {
            name
            id
        }
    }
`;

export { getItemsQuery };
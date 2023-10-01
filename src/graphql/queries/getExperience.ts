import { gql } from "@apollo/client";

export const GET_EXPERIENCE = gql`
    query GetExperience {
        workExperiences(where: { orderby: { field: NAME_IN, order: DESC } }) {
            nodes {
                id
                title
                role
                description
                startDate
                endDate
                currentlyWorking
            }
        }
    }
`;

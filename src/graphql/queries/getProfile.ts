import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
    query GetProfile {
        myProfile {
            fullname
            email
            role
            summary
            avatar
            social_media {
                name
                icon
                url
            }
        }
    }
`;

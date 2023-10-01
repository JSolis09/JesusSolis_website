import { gql } from "@apollo/client";

export const GET_MEDIAITEM = gql`
query GetMediaItem($title: String!) {
    mediaItems(where: { title: $title  }, first: 0) {
        nodes {
            id
            altText
            sourceUrl
            srcSet
            sizes
            title
            mediaDetails {
                width
                height
            }
        }
    }
  }
`;

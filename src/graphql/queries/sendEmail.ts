import { gql } from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($input: GetInTouchInput!) {
    getInTouch(input: $input) {
        success
        error
    }
  }
`;

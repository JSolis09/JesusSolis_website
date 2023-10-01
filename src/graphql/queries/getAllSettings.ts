import { gql } from "@apollo/client";

export const GET_CAPTCHA_KEY = gql`
  query GetCaptchaSiteKey {
    getCaptchaSiteKey
  }
`;

export const GET_SETTINGS = gql`
  query GetSettings {
    allSettings {
      generalSettingsDescription
      generalSettingsTitle
    }
  }
`;

export const GET_MENU = gql`
  query GetMenu($slug: String!) {
    menus(where: {slug: $slug}) {
      nodes {
        menuItems {
          nodes {
            id
            url
            label
          }
        }
      }
    }
  }
`;

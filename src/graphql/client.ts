import { ApolloClient, InMemoryCache } from "@apollo/client";

declare global {
  interface Window {
    ____APOLLO_STATE__: any;
  }
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `/server/graphql`,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});

export default client;

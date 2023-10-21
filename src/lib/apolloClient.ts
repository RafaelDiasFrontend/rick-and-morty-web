import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { HYGRAPH_PERMANENTAUTH_TOKEN, HYGRAPH_URL } from "./contants";

const httpLink = createHttpLink({
  uri: HYGRAPH_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

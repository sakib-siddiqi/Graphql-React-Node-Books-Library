// import ApolloClient from "apollo-boost";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SERVER_DOMAIN } from "../../utils/constants";

export const client = new ApolloClient({
  uri: `${SERVER_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});

export { authorQuery, authorsQuery, bookQuery, booksQuery } from "./query";

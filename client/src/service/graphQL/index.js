// import ApolloClient from "apollo-boost";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache:new InMemoryCache()
});

export { authorQuery, authorsQuery, bookQuery, booksQuery } from "./query";


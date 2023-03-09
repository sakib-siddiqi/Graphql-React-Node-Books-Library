const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const controllers = require("./controllers");
const BookSchema = require("./schema/Book.schema");
// * APP
const app = express();
app.use("/graphql", graphqlHTTP({ schema: BookSchema, graphiql: true }));

// ! exports
module.exports = app;

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const controllers = require("./controllers");
const BookSchema = require("./schema");
const cors=require("cors");


// * APP
const app = express();

// * MIDDLEWARE
app.use([cors()]);


// ROUTES
app.use(
  "/graphql",
  graphqlHTTP({
    schema: BookSchema,
    rootValue: { hello: () => "Hello World" },
    graphiql: true,
  })
);

// ! exports
module.exports = app;

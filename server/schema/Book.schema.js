const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require("graphql");
const _ = require("lodash");
const DUMMY_DATA = [
  { name: "asdf", id: "1", genre: "fun" },
  { name: "asdfasdf", id: "2", genre: "fun" },
  { name: "asdfasdfadsf", id: "3", genre: "fun" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: {type:GraphQLID} },
      resolve(parent, args) {
        const { id } = args;
        const result = DUMMY_DATA.find((e) => e.id === id);
        console.log(result);
        return result;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

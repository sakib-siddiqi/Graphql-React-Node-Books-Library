const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const _ = require("lodash");
const DUMMY = require("../data/DUMMY");
const { BookType, AuthorType } = require("./type");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return DUMMY.BOOKS;
      },
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;
        const result = DUMMY.BOOKS.find((e) => e.id === id);
        return result;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return DUMMY.AUTHOR;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;
        return _.find(DUMMY.AUTHOR, { id });
      },
    },
  },
  defaultValue:
    "query Quries{ books { name author { name } } authors{ name,age,id,books{name} } book(id: 1) { name genre id author { name age books { name genre id author { name } } } } }",
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString, defaultValue: null },
        genre: { type: GraphQLString, defaultValue: null },
      },
      resolve(parent, args) {
        console.log(args);
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

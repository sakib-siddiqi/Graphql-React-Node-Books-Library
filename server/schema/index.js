const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const _ = require("lodash");

export const DUMMY = {
  BOOKS: [
    { name: "asdf", id: "1", genre: "fun", authorId: "1" },
    { name: "asdfasdf", id: "2", genre: "fun", authorId: "1" },
    { name: "asdfasdfadsf", id: "3", genre: "fun", authorId: "3" },
  ],
  AUTHOR: [
    { name: "Sakib", id: "1", age: 21 },
    { name: "siddiqi", id: "2", age: 20 },
    { name: "sami", id: "3", age: 20 },
  ],
};

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

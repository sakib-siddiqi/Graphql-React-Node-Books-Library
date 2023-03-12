const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require("graphql");
const _=require("lodash");
const DUMMY = require("../data/DUMMY");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(DUMMY.AUTHOR, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, ags) {
        return _.filter(DUMMY.BOOKS, { authorId: parent.id });
      },
    },
  }),
});

module.exports = {
  AuthorType,
  BookType,
};

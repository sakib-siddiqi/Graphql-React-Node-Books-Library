const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const _ = require("lodash");

const DUMMY = {
  BOOKS: [
    { name: "asdf", id: "1", genre: "fun",authorId:"1" },
    { name: "asdfasdf", id: "2", genre: "fun",authorId:"1" },
    { name: "asdfasdfadsf", id: "3", genre: "fun",authorId:"3" },
  ],
  AUTHOR: [
    { name: "Sakib", id: '1', age: 21 },
    { name: "siddiqi", id: '2', age: 20 },
    { name: "sami", id: '3', age: 20 },
  ],
};

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author:{
      type:AuthorType,
      resolve(parent,args){
        return _.find(DUMMY.AUTHOR,{id:parent.authorId})
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books:{
      type:new GraphQLList(BookType),
      resolve(parent,ags){
        return _.filter(DUMMY.BOOKS,{authorId:parent.id})
      }
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    books:{
      type:new GraphQLList(BookType),
      resolve(){
        return DUMMY.BOOKS
      }
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
    authors:{
      type: new GraphQLList(AuthorType),
      resolve(){
        return DUMMY.AUTHOR
      }
    },
    author: {
      type: AuthorType,
      args: { id:{type: GraphQLID} },
      resolve(parent, args) {
        const { id } = args;
        return _.find(DUMMY.AUTHOR, { id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

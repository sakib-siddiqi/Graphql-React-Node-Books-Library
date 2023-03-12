const { AuthorType } = require("./type");

const mutations = {};

mutations.addBook = {
  type: BookType,
  args: {
    name: { type: GraphQLString, defaultValue: null },
    genre: { type: GraphQLString, defaultValue: null },
  },
  resolve(parent, args) {
    console.log(args);
    return args;
  },
};
mutations.addAuthor = {
  type: AuthorType,
  args: {
    name: { type: GraphQLString, defaultValue: null },
    genre: { type: GraphQLString, defaultValue: null },
  },
  resolve(parent, args) {
    console.log(args);
    return args;
  },
};

export default mutations;

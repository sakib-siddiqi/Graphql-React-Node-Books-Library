# Graphql-React-Node-Books-Library


[Frontend](https://graphql-apollo-react.netlify.app/)

[Backend](https://graphql-apollo-react.onrender.com/graphql)

### EXAMPLE QUERY

[Graphql Server](https://graphql-apollo-react.onrender.com/graphql)
```graphql
mutation Mutations {
  addBook(name: "Rich Dad, Poor Dad", genre: "Sai-Fi") {
    name
    genre
  }
}

query AuthorQueries {
  authors {
    name
    age
    id
    books {
      name
    }
  }
  author(id: 1) {
    name
    id
    books {
      name
      genre
      id
    }
  }
}

query AllBookQueries {
  books {
    name
    author {
      name
    }
  }
  book(id: 1) {
    name
    genre
    id
    author {
      name
      age
      books {
        name
        genre
        id
        author {
          name
        }
      }
    }
  }
}
```
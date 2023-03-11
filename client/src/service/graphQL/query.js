import { gql } from "@apollo/client";

const FIELDS = {
  book: "name,id,genre,author{name,age,id}",
  author: "name,id,age,books{name,age,id}",
};

export const booksQuery = (fields = FIELDS.book) => {
  return gql`
    query GetBooks {
      books {
        ${fields}
      }
    }
  `;
};

export function bookQuery(id = 1, fields = FIELDS.book) {
  return gql`
        query GetBook{
            book(id:${id}){
                ${fields}
            }
        }
    `;
}

export const authorsQuery = (fields = FIELDS.author) => {
  return gql`
          query GetBooks{
              author{
                  ${fields}
              }
          }
      `;
};

export function authorQuery(id = 1, fields = FIELDS.author) {
  return gql`
          query GetBook{
              author(id:${id}){
                  ${fields}
              }
          }
      `;
}

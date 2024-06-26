import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookdata: BookInput!) {
    saveBook(bookdata: $bookdata) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookID
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookID: $bookID) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookID
        authors
        description
        title
        image
        link
      }
    }
  }
`;

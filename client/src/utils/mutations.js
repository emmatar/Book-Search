import gql from "@apollo/client";

export const getBooks = gql`
  query GetBooks {
    books {
      authors
      bookID
      description
      image
      link
      title
    }
  }
`;

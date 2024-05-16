const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        savedBooks: [Book]
    }

    type Book {
        bookID: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Query {
        books: [Book]!
        user(userID: ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: Book!): User
        deleteBook(bookID: String!): Book
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

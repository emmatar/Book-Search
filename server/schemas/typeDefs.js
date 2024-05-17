const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Book {
        bookID: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    input BookInput {
        bookID: String!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookdata: BookInput!): User
        deleteBook(bookID: ID!): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;

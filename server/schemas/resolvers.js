// import user model
const { User, Book } = require("../models");
// import sign token function from auth
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  // All Get Requests
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedBooks");
        return userData;
      }
      throw AuthenticationError;
    },
  },
  // Any manipulation of data
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { user, token };
    },
    saveBook: async (parent, { bookdata }, context) => {
      console.log(bookdata);
      if (context.user._id) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { savedBooks: bookdata },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return user;
      }
      throw AuthenticationError;
    },
    deleteBook: async (parent, { bookID }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $pull: { savedBooks: bookID },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return user;
      }
      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const key = await user.isCorrectPassword(password);

        if (!key) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const token = signToken(user);
        console.log(token);
        return { user, token };
      } catch (error) {
        console.log(error);
        throw new AuthenticationError("Something went wrong");
      }
    },
  },
};

module.exports = resolvers;

// import user model
const { User, Book } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

const resolvers = {
  // All Get Requests
  Query: {
    user: async (parent, { userID }) => {
      return User.findOne({ _id: userID });
    },
  },
  // Any manipulation of data
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
    saveBook: async (parent, { Book }) => {
      return User.findOneAndUpdate(
        { _id: Book },
        {
          $addToSet: { savedBook: bookId },
        }
      );
    },
  },
};
// ----------Resume Work HERE!------ Last Left: *Go to Next Comment*
//   async saveBook({ user, body }, res) {
//     console.log(user);
//     try {
//       // --------Not
//       const updatedUser = await User.findOneAndUpdate(
//         // Not sure
//         { _id: user._id },
//         { $addToSet: { savedBooks: body } },
//         { new: true, runValidators: true }
//       );
//       return res.json(updatedUser);
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json(err);
//     }
//   },
//   // remove a book from `savedBooks`
//   async deleteBook({ user, params }, res) {
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: user._id },
//       { $pull: { savedBooks: { bookId: params.bookId } } },
//       { new: true }
//     );
//     if (!updatedUser) {
//       return res.status(404).json({ message: "Couldn't find user with this id!" });
//     }
//     return res.json(updatedUser);
//   },
// };

// async login({ body }, res) {
//   const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
//   if (!user) {
//     return res.status(400).json({ message: "Can't find this user" });
//   }

//   const correctPw = await user.isCorrectPassword(body.password);

//   if (!correctPw) {
//     return res.status(400).json({ message: 'Wrong password!' });
//   }
//   const token = signToken(user);
//   res.json({ token, user });
// }

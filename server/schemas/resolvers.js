const { User } = require('../models');


// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    getMe: async () => {
      // Get and return all documents from the Bookes collection
      return await User.find({});
    }

  }
};

module.exports = resolvers;
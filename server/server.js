const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = ('./utils/auth')
const { ApolloServer } = require('apollo-server-express');
const { resolvers, typeDefs } = require('./schemas')

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
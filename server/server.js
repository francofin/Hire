const express = require('express');
const db = requrie('./config/connection');

const {resolvers, typeDefs} = require('./schemas');

const {authMiddleWare} = require('./utils/auth');

const {ApolloServer} = require('apollo-server-express');
const { urlencoded } = require('express');

const path = requrie('path');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare
});

server.applyMiddleware({app});

app.use(express.urlencoded({extended: false}));

app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, './public/404.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
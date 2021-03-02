const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const {resolvers, typeDefs} = require('./schemas');
const db = require('./config/connection');
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');




const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});
//new server data 
server.applyMiddleware({app});

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors('*'));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/public/images')));

// app.use('/images', express.static(path.join(__dirname, '../client/static/media')));
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/serviceWorker.js"));
});

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
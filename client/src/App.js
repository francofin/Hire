import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import {ApolloClient} from "@apollo/client";
import {createUploadLink} from 'apollo-upload-client';

import { InMemoryCache} from '@apollo/client';
// import { StoreProvider } from "./utils/GlobalState";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import { setContext } from '@apollo/client/link/context';

import JobDetail from "./pages/JobDetail";
import AddJob from "./pages/AddJob";
import store from "./utils/store";
const uploadLink = createUploadLink({uri: "/graphql", credentials: 'same-origin'});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  }
});


const client = new ApolloClient({

  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink)
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile/:id?" component={Profile} />
                <Route exact path="/addjob" component={AddJob} />
                <Route exact path="/jobs/:id" component={JobDetail} />
                <Route exact path="/success" component={Success} />
                <Route component={NoMatch} />
              </Switch>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

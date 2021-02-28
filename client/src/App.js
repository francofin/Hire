import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost-upload";
import {createUploadLink} from 'apollo-upload-client';
import { InMemoryCache} from 'apollo-cache-inmemory';
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
import store from "./utils/store";
import JobDetail from "./pages/JobDetail";
const httpLink = createUploadLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  cache: new InMemoryCache({
    typePolicies: {
      Skills: {
        keyFields: []
      },
      Images: {
        keyFields: ["id", "filename", "path"]
      }
    }
  }),
  link: httpLink,
  // uri: "/graphql",
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

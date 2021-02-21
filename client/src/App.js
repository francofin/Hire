import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { StoreProvider } from "./utils/GlobalState";
import { Provider } from "react-redux";
import Footer from './components/Footer';
import NoMatch from "./pages/NoMatch";
import Success from "./pages/Success";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import store from './utils/store';



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


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
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

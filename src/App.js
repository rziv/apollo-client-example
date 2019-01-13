import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CitizenName from "./CitizenName";
import Address from "./Address";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <CitizenName />
          <Address />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

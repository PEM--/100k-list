import * as React from "react";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";

import List from "./List";
import { GlobalStyle } from "../themes/GlobalStyle";

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

export class Main extends React.Component {
  render() {
    return (<ApolloProvider client={client}>
      <GlobalStyle />
      <List />
    </ApolloProvider>);
  }
}

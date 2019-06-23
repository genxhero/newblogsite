import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import App from './components/App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: "include",
})

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    cache,
    link
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);



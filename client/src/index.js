import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import App from './components/App';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',

})

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    cache: new InMemoryCache(),
    link: httpLink
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);



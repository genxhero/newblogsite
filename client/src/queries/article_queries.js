/**
 * The folowing file contains graphql queries for articles.
 */

import gql from 'graphql-tag';

 export const index = gql`
 query {
    articles{
      title
      author {
        username
      }
    }
  }
`;

export const show = gql`
query {
    article(id: $id) {
      id
      title
      body
       author {
        username
      }
    }
  }
`;
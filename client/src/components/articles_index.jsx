import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import {index} from '../queries/article_queries';

class ArticlesIndex extends Component {
    render() {
        const articles = this.props.data.articles || null;
        return (
            <div>
                <h1>Most Recent Articles</h1>
               {
                   articles  && 
                   <div>
                    {articles.map( article => {
                        return (
                            <div key={`${article.title}penis`}> 
                                <h1>{article.title}, by {article.author.username}</h1>
                            </div>
                        )
                    }

                    )}
                  </div>
            }
            </div>
        )
    }
}
export default graphql(index)(ArticlesIndex);
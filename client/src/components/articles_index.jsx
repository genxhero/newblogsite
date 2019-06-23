import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import {index} from '../queries/article_queries';

class ArticlesIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [{body: "Test article"}]
        }
    }

    componentDidMount() {
       this.setState( () => {
               return { articles: this.props.data.articles }
            });
    }

    render() {
        return (

            <div>
                <h1>Buggery</h1>
               {this.state.articles && <p>{this.state.articles[0].body}</p>}
            </div>
        )
    }
}
export default graphql(index)(ArticlesIndex);
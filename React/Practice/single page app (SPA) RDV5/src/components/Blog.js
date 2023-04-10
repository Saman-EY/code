import React, { Component } from 'react';
import queryString from 'query-string';

class Blog extends Component {
    Navigate = () => {
        // this.props.history.push('/products');
        this.props.history.replace('/products');
    };

    render() {
        let result = queryString.parse(this.props.location.search);
        return (
            <div>
                <h3>Blog</h3>
                <p>This is {this.props.match.params.author} </p>
                <button onClick={this.Navigate}>go somewhere</button>
            </div>
        );
    }
}

export default Blog;

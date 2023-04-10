import React, { Component } from 'react';
import HOC from './HOC';

class temp2 extends Component {
    render() {
        return (
            <div>
                <p>temp2 num : {this.props.num} </p>
                <button onClick={this.props.increase}>temp2 +</button>
            </div>
        );
    }
}

export default HOC(temp2);

import React, { Component } from 'react';
import HOC from './HOC';

class temp extends Component {
    render() {
        return (
            <div>
                <p>temp1 num : {this.props.num} </p>
                <button onClick={this.props.increase}>temp1 +</button>
            </div>
        );
    }
}

export default HOC(temp);

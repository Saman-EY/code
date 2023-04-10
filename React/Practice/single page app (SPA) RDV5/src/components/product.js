import React, { Component } from 'react';

class product extends Component {
    render() {
        return (
            <div>
                <p> {`This is, product number: ${this.props.match.params.id}`}</p>
            </div>
        );
    }
}

export default product;
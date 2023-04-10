import React, { Component } from 'react';

class Comp1 extends Component {
    render() {
        let {title, body, Delete} = this.props;
        return (
            <div style={{border: "gray 1px solid", marginTop: "20px", padding: "5px 20px"}}>
                <h3> {title} </h3>
                <p> {body} </p>
                <button onClick={Delete} >delete</button>
            </div>
        );
    }
}

export default Comp1;
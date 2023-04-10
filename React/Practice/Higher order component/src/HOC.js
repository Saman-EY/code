import React, { Component } from 'react';

let withCounter = (OldComp) => {
    class newComp extends Component {
        constructor() {
            super();
            this.state = {
                num: 0
            };
        }

        increase = () => {
            this.setState((prev) => ({
                num: prev.num + 1
            }));
        };

        render() {
            return <OldComp num={this.state.num} increase={this.increase} />;
        }
    }

    return newComp;
};

export default withCounter;

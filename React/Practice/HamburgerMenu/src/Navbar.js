import React, { Component } from 'react';

import styled from 'styled-components';

// NAV
let Nav = styled.nav`
    background-color: gray;

    @media (max-width: 700px) {
        width: 340px;
        height: 100%;
        position: fixed;
        right: 0;
        transition: all ease-in .3s ;
        transform: ${(props) => (props.open ? "translatex(0)" : "translatex(100%)")};
    }
`;
// UL
let MyUl = styled.ul`
    list-style: none;
    color: white;
    display: flex;
    li {
        padding: 14px;
        width: 25%;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: black;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        margin-top: 5rem;
        li {
            width: 100%;
            text-align: left;
        }
    }
`;
// HAMBURGER
let Div = styled.div`
    display: flex;
    padding-top: 2px;
    flex-direction: column;
    gap: 8px;
    position: fixed;
    top: 25px;
    right: 25px;
    width: 2rem;
    z-index: 20;
    cursor: pointer;
    div {
        width: 100%;
        height: 4px;
        background-color: ${props => props.open ? "white" : "blue"};
        transform-origin: -1px;
        transition: all ease-in 0.2s;
        &:nth-child(1) {
            transform: ${(props) =>
                props.open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${(props) =>
                props.open ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${(props) => (props.open ? 0 : 1)};
        }

        &:nth-child(3) {
            transform: ${(props) =>
                props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 700px) {
        display: none;
    }
`;

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    HandleSidebar = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        return (
            <React.Fragment>
                <Nav open={this.state.open}>
                    <MyUl>
                        <li>Home</li>
                        <li>Docs</li>
                        <li>Buy me a coffe</li>
                        <li>Github</li>
                    </MyUl>
                </Nav>
                <Div open={this.state.open} onClick={this.HandleSidebar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Div>
            </React.Fragment>
        );
    }
}

export default Navbar;

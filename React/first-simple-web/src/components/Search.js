import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        }
    }

    inputHandle = (e) => {
        this.setState(
            {
                text: e.target.value,
            }
        )
    } 


    render() {
        let {text} = this.state;
        return (
            <section className={styles.container}>
                <p>Search What You Want</p>
                <input type="text" value={text} onChange={this.inputHandle} placeholder="Search..." />
            </section>
        );
    }
}

export default Search;

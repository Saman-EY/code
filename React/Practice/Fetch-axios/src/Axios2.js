import React, { Component } from 'react';
import axios from 'axios';

class Axios2 extends Component {
    constructor() {
        super();
        this.state = {
            text: [],
            Error: false
        };
    }

    componentDidMount() {
        /////////// HANDLE ERROR
        // axios
        //     .get('https://jsonplaceholder1.typicode.com/posts')
        //     .then((response) => this.setState({ text: response.data }))
        //     .catch(() => this.setState({ Error: true }));


        /////////// patch and put 
        // axios
        //     .put('https://jsonplaceholder.typicode.com/posts/1', {
        //         title: 'salam'
        //         // body: 'bye'
        //     })
        //     .then((res) => console.log(res.data));

        // axios
        //     .patch('https://jsonplaceholder.typicode.com/posts/1', {
        //         // title: 'salam'
        //         body: 'bye'
        //     })
        //     .then((res) => console.log(res.data));

        ////////////////// simultaneous axios
        // axios.all([
        //     axios.get('https://jsonplaceholder.typicode.com/albums'),
        //     axios.get('https://jsonplaceholder.typicode.com/posts'),
        //     axios.post('https://jsonplaceholder.typicode.com/users', {name: "saman"}),
        // ]).then(axios.spread((albums, two, users) => {
        //     console.log(albums.config);
        //     console.log(two.config);
        //     console.log(users);
        // }));

        /////////// interceptor test 
        // axios
        //     .get('https://jsonplaceholder.typicode.com/posts/1')
        //     .then((response) => console.log(response))
            
        //////////////////////
        axios
            .get('posts')
            .then((response) => console.log(response.config))
        axios
            .post('users')
            .then((response) => console.log(response.config))
        axios
            .get('albums')
            .then((response) => console.log(response.config))
    }

    render() {
        let { text, Error } = this.state;
        return (
            <div>
                {/* {Error ? (
                    <h1>Error accured</h1>
                ) : (
                    text.map((i) => <h4 key={i.id}>{i.title}</h4>)
                )} */}
            </div>
        );
    }
}

export default Axios2;

import React, { Component } from 'react';
import Comp1 from './components/Comp1';
import axios from 'axios';

class Axios extends Component {
    constructor() {
        super();
        this.state = {
            postData: [],
            title: '',
            body: ''
        };
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => this.setState({ postData: res.data }));
    }

    ChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    sendData = (event) => {
        let data = {
            title: this.state.title,
            body: this.state.body
        };
        axios
            .post('https://jsonplaceholder.typicode.com/posts', data)
            .then((res) => console.log(res));
    };

    deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => console.log(res.config))
    };

    render() {
        let postData = this.state.postData;
        let { title, body } = this.state;
        return (
            <div>
                <label>TITLE:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.ChangeHandler}
                />
                <br /> <br />
                <label>BODY:</label>
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={this.ChangeHandler}
                />
                <br />
                <br />
                <button onClick={this.sendData}>Send</button>
                <h2>Posts:</h2>
                {postData.map((item) => (
                    <Comp1
                        key={item.id}
                        title={item.title.split(' ', 1)}
                        body={item.body}
                        Delete={() => this.deletePost(item.id)}
                    />
                ))}
            </div>
        );
    }
}

export default Axios;

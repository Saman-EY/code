import React, { Component } from 'react';


class PostData extends Component {
    constructor() {
        super();
        this.state = {
            getData: []
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then((response) => response.json())
        //     .then((json) =>
        //         this.setState({
        //             getData: json
        //         })
        //     );
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    postData = () => {
        let body = JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        });
        let headers = {
            'Content-type': 'application/json; charset=UTF-8'
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body,
            headers: headers
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    deleteData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    render() {
        return (
            <div>
                {/* {this.state.getData.slice(0,10).map((item) => (
                    <div key={item.id}>
                    <h1>{item.id}</h1>
                    <p>{item.title}</p>
                    </div>
                ))} */}

                <button onClick={this.getData}>GET</button>
                <button onClick={this.postData}>POST</button>
                <button onClick={this.deleteData}>DELETE</button>
            </div>
        );
    }
}

export default PostData;

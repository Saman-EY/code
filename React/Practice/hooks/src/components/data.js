import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Data = () => {
    let [isLoading, setLoading] = useState(true);
    let [post, setPost] = useState([]);
    let [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setLoading(false);
                setPost(res.data);
                setError('');
            })
            .catch((error) => {
                setLoading(false);
                setPost([]);
                setError('An error occured');
            });
    }, []);

    return (
        <div>
            {
                isLoading ? 
                <h1>Loading...</h1> :
                post.map((item) => (<h3 key={item.id}>{item.title}</h3>))

            }
            {error && error}
        </div>
    );
};

export default Data;

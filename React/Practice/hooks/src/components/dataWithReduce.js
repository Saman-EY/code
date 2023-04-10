import axios from 'axios';
import React, { useReducer, useEffect } from 'react';

let initialState = {
    isLoading: true,
    post: [],
    error: ''
};
let reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                isLoading: false,
                post: action.payLoad,
                error: ''
            };
        case 'Failed':
            return {
                isLoading: false,
                post: [],
                error: 'An error occured'
            };
        default:
            return state;
    }
};

const DataWithReduce = () => {
    let [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            dispatch({ type: 'Success', payLoad: res.data });
        });
    });

    return (
        <div>
            {data.isLoading
                ? 'wait Loading...'
                : data.post.map((i) => <p key={i.id}>{i.title}</p>)}
            {data.error && data.error}
        </div>
    );
};

export default DataWithReduce;

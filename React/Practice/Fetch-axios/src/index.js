import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

//////// interceptors
// axios.interceptors.response.use(
//     (response) => {
//         console.log(response.data);
//         return response.data;
//     },
//     (Error) => {
//         console.log(Error);
//         return Promise.reject(Error);
//     }
// );

//////// Default Globals
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post["autho"] = "hi"
axios.defaults.headers.common["moto"] = "by"

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

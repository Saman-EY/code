import React, {useEffect} from 'react';
import useTitle from './hooks/useTitle';

const Login = () => {

    // useEffect(() => {
    //     document.title = "Login"
    // }, [])

    useTitle("Login");

    return (
        <div>
            <h1>This is Login</h1>
        </div>
    );
};

export default Login;
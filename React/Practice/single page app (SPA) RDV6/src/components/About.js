import React from 'react';
import {useNavigate} from "react-router-dom"

function About(props) {
    let navigate = useNavigate();

    let Go = () => {
        // navigate("/product")
        // navigate("/product", {replace: true})
        navigate(-1)
    }

    return (
        <div>
            <h1>This is ABOUT page</h1>
            <button onClick={Go} >go somewhere</button>
        </div>
    );
}

export default About;
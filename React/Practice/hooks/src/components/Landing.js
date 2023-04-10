import React, {useEffect} from 'react';
import useTitle from './hooks/useTitle';

const Landing = () => {

    // useEffect(() => {
    //     document.title = "Landing"
    // }, [])

    useTitle("Landing");

    return (
        <div>
            <h1>This is Landing</h1>
        </div>
    );
};

export default Landing;
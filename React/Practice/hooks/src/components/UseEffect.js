import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    let [num, set] = useState(0);
    let [secondnum, func] = useState(1);

    useEffect(() => {
        // console.log(secondnum);

        return () => {
            console.log('section removed!!');
            console.log('in child');
        };
    }, []);

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => set((prev) => ++prev)}>first</button>
            <hr />
            <h1>{secondnum}</h1>
            <button onClick={() => func((prev) => ++prev)}>second</button>
        </div>
    );
};

export default UseEffect;

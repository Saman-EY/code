import React, { useState, useEffect, useRef } from 'react';

const RefHook = () => {
    let [text, setText] = useState('');

    let input = useRef();

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <div>
            <input
                type="text"
                ref={input}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default RefHook;

import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const CustomHook2 = () => {

    let [name, setName] = useLocalStorage("name", "");


    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};

export default CustomHook2;
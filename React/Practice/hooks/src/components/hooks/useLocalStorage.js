import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    let [value, setValue] = useState(() => {
        let localState = localStorage.getItem(key);
        return localState ? JSON.parse(localState) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;

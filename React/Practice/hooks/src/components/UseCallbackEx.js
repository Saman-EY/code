import React, { useState, useCallback } from 'react';
import CompA from './CompA';
import CompB from './CompB';

const UseCallbackEx = () => {

    {console.log("app rendered")}

    let [value1, setValue1] = useState('A');
    let [value2, setValue2] = useState('B');

    let ChangeA = useCallback(() => {
        setValue1('AA');
    }, [value1]);

    let ChangeB = useCallback(() => {
        setValue2('BB');
    }, [value2]);

    return (
        <div>
            <CompA value={value1} changeHandler={ChangeA} />
            <CompB value={value2} changeHandler={ChangeB} />
        </div>
    );
};

export default UseCallbackEx;

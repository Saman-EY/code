import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ObjArray from './components/ObjArray';
import UseEffect from './components/UseEffect';
import Data from './components/data';
import Context from './components/Context';
import Reducer from './components/Reducer';
import Reducer2 from './components/Reducer2';
import DataWithReduce from './components/dataWithReduce';
import UseMemoEx from './components/useMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import RefHook from './components/RefHook';
import CustomHook from './components/CustomHook';
import CustomHook2 from './components/CustomHook2';


export let NameContext = React.createContext();
export let AgeContext = React.createContext();

const App = () => {
    // let [isShown, setIsShown] = useState(true);

    // let [name, set] = useState("saman")
    // let [age, sett] = useState(29)

    return (
        <div>
            {/* <Counter /> */}
            {/* <ObjArray /> */}
            {/* <button onClick={ () => setIsShown(false)}>delete</button>
            <br /><br />
            {isShown && <UseEffect />} */}

            {/* <NameContext.Provider value={name}>
                <AgeContext.Provider value={age}>
                    <Context />
                </AgeContext.Provider>
            </NameContext.Provider> */}

            {/* <Reducer /> */}
            {/* <Reducer2 /> */}
            {/* <Data /> */}
            {/* <DataWithReduce /> */}
            {/* <UseMemoEx /> */}

            {/* <UseCallbackEx /> */}
            {/* <RefHook /> */}
            {/* <CustomHook /> */}
            <CustomHook2 />
        </div>
    );
};

export default App;

import React, { useState } from 'react';

const ObjArray = () => {
    let [data, set] = useState({ name: '', age: "" });

    let [second, setSecond] = useState(["item"]);

    return (
        <div>
            <input
                type="text"
                value={data.name}
                onChange={(e) => set({...data, name: e.target.value })}
            />
            <br />
            <input
                type="text"
                value={data.age}
                onChange={(e) => set({...data, age: e.target.value })}
            />
            <p> {JSON.stringify(data)} </p>

            <hr />
            <button onClick={() => {setSecond([...second,"saman"])}} >add</button>
            <h3> {JSON.stringify(second ) } </h3>

        </div>
    );
};

export default ObjArray;

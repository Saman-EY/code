import React from 'react';

const CompB = (props) => {
    console.log("comp B rendered");

    return (
        <div>
            <h3>Component B : {props.value}</h3>
            <button onClick={props.changeHandler} >Change B</button>
        </div>
    );
};

export default React.memo(CompB);
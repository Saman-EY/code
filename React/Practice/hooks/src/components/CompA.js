import React from 'react';

const CompA = (props) => {


    console.log("comp A rendered");


    return (
        <div>
            <h3>Component A : {props.value}</h3>
            <button onClick={props.changeHandler} >Change A</button>
        </div>
    );
};

export default React.memo(CompA);
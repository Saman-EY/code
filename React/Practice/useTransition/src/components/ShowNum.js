import React, {useDeferredValue} from 'react';

const ShowNum = ({numbers}) => {

    let defer = useDeferredValue(numbers)

    return (
        <div>
            {defer.map(i => <p key={i}>{i}</p> )}
        </div>
    );
};

export default ShowNum;
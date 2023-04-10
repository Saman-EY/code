import React, {useContext} from 'react';
import { NameContext, AgeContext } from '../App';


const Secondchild = () => {
    let name = useContext(NameContext);
    let age = useContext(AgeContext)
    return (
        <div>
            <h3> this is <i>{name}</i>  and im <i>{age}</i>   </h3>
            {console.log(name)}
        </div>
    );
};

export default Secondchild;
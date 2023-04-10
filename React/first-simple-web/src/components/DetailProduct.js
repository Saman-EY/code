import React from 'react';
import {useParams} from "react-router-dom"

function DetailProduct(props) {
    let params = useParams();
    return (
        <div>
            <h1>Details product #{params.id}  </h1>
            
        </div>
    );
}

export default DetailProduct;
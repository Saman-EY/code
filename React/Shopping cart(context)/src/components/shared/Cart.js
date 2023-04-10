import React, { useContext } from 'react';
// icon
import trash from "../../assets/icons/trash.svg"
// functions
import { handleTitle } from '../../helper/Functions';
//context 
import { CartContext } from '../../context/CartContextProvider';
// style
import styles from "../../styles/Cart.module.css"

const Cart = (props) => {
    let { image, title, price, qty } = props.data;

    let {dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <figure>
                <img src={image} alt="product-img" />
            </figure>
            <div>
                <h3>{handleTitle(title)}</h3>
                <p>{price} $</p>
            </div>
            <span>{qty}</span>
            <div className={styles.BtnSection}>
                {
                    (qty === 1) ? <button onClick={() => dispatch({type: "REMOVE_ITEMS", payload: props.data})} ><img src={trash} alt="svg" /></button> :
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} >-</button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;

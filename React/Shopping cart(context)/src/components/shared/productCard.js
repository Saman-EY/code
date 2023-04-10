import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// img
import trashImg from "../../assets/icons/trash.svg"
// context
import { CartContext } from '../../context/CartContextProvider';
// style
import styles from '../../styles/productCard.module.css';
//functions
import { handleTitle, IsInCart, quantityCount } from '../../helper/Functions';

const ProductCard = ({ data }) => {
    
    let {state, dispatch} = useContext(CartContext);
    
    return (
        <div className={styles.container}>
            <figure>
                <img src={data.image} alt="prodactImg" />
            </figure>
            <div className={styles.info}>
                <h3>{handleTitle(data.title)}</h3>
                <p>{data.price} $</p>
                <div className={styles.InfoBtns}>
                    <Link to={`/products/${data.id}`}>Details</Link>
                    <div>
                        {(quantityCount(state, data.id) === 1) && <button className={styles.smallBtn} onClick={() => dispatch({type: "REMOVE_ITEMS", payload: data})}> <img src={trashImg} alt="" /> </button> }
                        {(quantityCount(state, data.id) > 1) && <button className={styles.smallBtn} onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button> }
                        {(quantityCount(state, data.id) > 0) && <span className={styles.Counter}>{quantityCount(state, data.id)}</span> } 
                        {
                            IsInCart(state, data.id) ? 
                            <button className={styles.smallBtn} onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button> :
                            <button className={styles.AddBtn} onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
    ;
};

export default ProductCard;

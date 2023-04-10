import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

//context
// import { ProductContext } from '../context/ProductContextProvider';

// style
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = () => {
    let params = useParams()
    let id = params.id;
    let [data, setdata] = useState([]);

    let getProduct = async () => {
        let response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        );
        return response.data;
    };

    useEffect(() => {
        let FetchApi = async () => {
            setdata(await getProduct());
        };

        FetchApi();
    }, []);

    // let data = useContext(ProductContext);

    // let product = data[id - 1];

    // let { image, title, description, category, price } = product;

    let { image, title, description, category, price } = data;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <figure>
                    <img src={image} alt="productImg" />
                </figure>
                <div className={styles.description}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>
                        Category: <span>{category}</span>
                    </p>
                    <div>
                        <span>{price} $ </span>
                        <Link to={'/products'}>Back to shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

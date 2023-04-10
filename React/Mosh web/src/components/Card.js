import React from 'react';
// style
import '../styles/Card.css';

const Card = ({ price, storage, ram }) => {
    return (
        <section className="CardContainer">
            <div className="CardHeader">
                <span>Entry</span>
                <div className="PriceSection">
                    <h3>${price}</h3>
                    <span>/month</span>
                    <span>10% OFF</span>
                </div>
                <p>Easy start on the cloud</p>
            </div>
            <div className="CardBody">
                <ul>
                    <li>Unlimited Websites</li>
                    <li>Unlimited Bandwidth</li>
                    <li>{storage} GB SSD Sotrage</li>
                    <li>{ram} GB RAM</li>
                </ul>
                <button>BUY NOW</button>
            </div>
        </section>
    );
};

export default Card;

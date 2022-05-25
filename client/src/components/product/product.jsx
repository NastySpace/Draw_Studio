import React from 'react';
import styles from './product.module.css';

const Product = ({ img, name, price }) => {
    return (
        <div className={styles.card}>
            <img className={styles.photo} src={img} alt="" />
            <h2 className={styles.name}>{name}</h2>
            <span className={styles.price}>{price}</span>
        </div>
    );
};

export default Product;

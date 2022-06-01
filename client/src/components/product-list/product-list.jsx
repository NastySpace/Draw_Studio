import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import styles from './product-list.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$1500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$5000.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$1500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$5000.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$1500.00',
        },
        {
            img: 'https://i.pinimg.com/736x/2d/aa/e0/2daae037e8100de649e2256160ce87c3.jpg',
            name: 'T-Shirt',
            price: '$5000.00',
        },
    ]);

    return (
        <div className={styles.shop}>
            <h1 className={styles.title}>new arrivals</h1>
            <p className={styles.subtitle}>
                The Best Online Sales to Shop This Weekend
            </p>
            <div className={styles.container}>
                <div className={styles.products}>
                    {products.map((product, i) => {
                        return (
                            <Product
                                key={i}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductList;

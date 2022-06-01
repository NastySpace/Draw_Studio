import React from 'react';
import styles from './modal.module.css';

const Modal = ({
    name,
    img,
    size,
    sex,
    material,
    style,
    isAvailable,
    price,
}) => {
    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <div className={styles.content}>
                <img className={styles.img} src={img} alt="t-shirt photo" />
                <div className={styles.content_text}>
                    <p>Size:{size}</p>
                    <p>Sex: {sex}</p>
                    <p>Material: {material}</p>
                    <p>Style: {style}</p>
                    <p>instruction:</p>
                    <ul>
                        <li>прасувати без пару</li>
                        <li>прати не вище 40С</li>
                        <li>не викручувати руками</li>
                    </ul>
                    {isAvailable ? (
                        <span className={styles.yes}>YES</span>
                    ) : (
                        <span className={styles.no}>NO</span>
                    )}
                    <p>Price {price}</p>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input_name}
                    />
                    <input
                        type="text"
                        placeholder="surname"
                        className={styles.input_name}
                    />
                    <input
                        type="text"
                        placeholder="secondname"
                        className={styles.input_name}
                    />
                    <input
                        type="text"
                        placeholder="phone +(000)-000-00-00"
                        className={styles.input_name}
                    />
                    <input
                        type="text"
                        placeholder="New post office:"
                        className={styles.input_name}
                    />
                </div>
                <p>Оплата: Нова пошта</p>
                <button className={styles.button_buy}>Buy</button>
                <button className={styles.button_exit}>Exit</button>
            </div>
        </div>
    );
};

export default Modal;

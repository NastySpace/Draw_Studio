import React from 'react';
import styles from './FirstScreen.module.css';
import onePhoto from '../../assets/img/three.jpg';
import twoPhoto from '../../assets/img/black.jpg';
const FirstScreen = () => {
    return (
        <div className={styles.screen}>

            <div className={styles.text}>

                <h2 className={styles.h2}>Trending 2022</h2>
                <h1 className={styles.h1}>Draw Studio</h1>
                <p className={styles.p}>Одяг який зробить ваший образ неймовірним.Ви можете замовити готовий малюнок або обрати свій! </p>
                <button className={styles.shop}>Shop now</button>
            </div>
            <div>
                <div>
                    <img className={styles.onePhoto} src={onePhoto} alt="" />
                </div>
                <div>
                    <img className={styles.twoPhoto} src={twoPhoto} alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;

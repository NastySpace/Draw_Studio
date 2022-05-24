import React from 'react';
import styles from './FirstScreen.module.css';
import onePhoto from '../../assets/img/three.jpg';
import twoPhoto from '../../assets/img/black.jpg';
import stacy from '../../assets/img/stacy.jpg';
const FirstScreen = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Trending 2022</h2>
                <h1 className={styles.h1}>Draw Studio</h1>
                <p className={styles.p}>
                    Одяг який зробить ваший образ неймовірним.Ви можете замовити
                    готовий малюнок або обрати свій!{' '}
                </p>
                <button className={styles.shop}>Shop now</button>
            </div>
            <div className={styles.foto}>
                <div className={styles.foto_one}>
                    <img className={styles.onePhoto} src={onePhoto} alt="" />
                </div>
                <div className={styles.foto_stacy}>
                    <img className={styles.stacy} src={stacy} alt="" />
                    <p className={styles.Anastasiia}>Anastasiia</p>
                </div>
                <div className={styles.foto_two}>
                    <img className={styles.twoPhoto} src={twoPhoto} alt="" />
                    <p className={styles.draw}>Draw</p>
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;

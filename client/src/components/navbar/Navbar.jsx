import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.logo}></img>
            <nav className={styles.nav}>
                <div href="" className={styles.nav_item}>
                    <img className={styles.icon}></img>
                    <div className={styles.label}>Головна</div>
                </div>
                <div href="" className={styles.nav_item}>
                    <img className={styles.icon}></img>
                    <div className={styles.label}>Магазин</div>
                </div>
                <div href="" className={styles.nav_item}>
                    <img className={styles.icon}></img>
                    <div className={styles.label}>Замовити</div>
                </div>
                <div href="" className={styles.nav_item}>
                    <img className={styles.icon}></img>
                    <div className={styles.label}>Ескізи</div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

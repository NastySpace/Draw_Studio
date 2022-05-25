import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo.svg';
import homeIcon from '../../assets/img/nav-home.svg';
import orderIcon from '../../assets/img/nav-order.svg';
import sketchIcon from '../../assets/img/nav-sketch.svg';
import storeIcon from '../../assets/img/nav-store.svg';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.logo}></img>
            <nav className={styles.nav}>
                <div href="" className={styles.nav_item}>
                    <img src={homeIcon} className={styles.icon}></img>
                    <div className={styles.label}>Головна</div>
                </div>
                <div href="" className={styles.nav_item}>
                    <img src={orderIcon} className={styles.icon}></img>
                    <div className={styles.label}>Замовити</div>
                </div>
                <div href="" className={styles.nav_item}>
                    <img src={sketchIcon} className={styles.icon}></img>
                    <div className={styles.label}>Ескізи</div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

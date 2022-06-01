import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/img/logo.svg';
import homeIcon from '../../assets/img/nav-home.svg';
import orderIcon from '../../assets/img/nav-order.svg';
import sketchIcon from '../../assets/img/nav-sketch.svg';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.logo}></img>
            <nav className={styles.nav}>
                <div href="" className={styles.nav_item}>
                    <img src={homeIcon} className={styles.icon}></img>
                    <NavLink className={styles.label} to="main">
                        Головна
                    </NavLink>
                </div>
                <div href="" className={styles.nav_item}>
                    <img src={orderIcon} className={styles.icon}></img>
                    <NavLink className={styles.label} to="order">
                        Замовити
                    </NavLink>
                </div>
                <div href="" className={styles.nav_item}>
                    <img src={sketchIcon} className={styles.icon}></img>
                    <NavLink className={styles.label} to="sketch">
                        Ескізи
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

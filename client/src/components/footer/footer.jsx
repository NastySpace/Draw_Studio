import React from 'react';
import styles from './footer.module.css';
import footer from '../../assets/img/footer.svg';
import call from '../../assets/img/call.svg';
import mail from '../../assets/img/mail.svg';
import map from '../../assets/img/map.svg';
import insta from '../../assets/img/instagram.svg';
import teleg from '../../assets/img/telegram.svg';
import linked from '../../assets/img/linkedin.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.footer_logo} src={footer} alt="" />

            <div className={styles.footer_text}>
                <p>Одесса,Таірово</p>
                <p>+(380)931646237</p>
                <p>nasty.space@gmail.com</p>
            </div>
            <div className={styles.footer_icon}>
                <img className={styles.icon} src={call} alt="" />
                <img className={styles.icon} src={mail} alt="" />
                <img className={styles.icon} src={map} alt="" />
                <img className={styles.icon} src={insta} alt="" />
                <img className={styles.icon} src={teleg} alt="" />
                <img className={styles.icon} src={linked} alt="" />
            </div>
            <div>
                <p className={styles.footer_text}>Anastasiia Telizhenko 2022</p>
            </div>
        </div>
    );
};

export default Footer;

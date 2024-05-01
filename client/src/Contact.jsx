import React from "react";
import { Link } from "react-router-dom";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.pageBackground}>
            <div className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <h2>Rowan Web Programming</h2>
                </div>
                <div className={styles.navbarRight}>
                    <Link to={`/`} className={styles.btn}>Home</Link>
                    <Link to={`/about`} className={styles.btn}>About</Link>
                    <Link to={`/contact`} className={styles.btn}>Contact Us</Link>
                </div>
            </div>

            <div className={styles.imageSection}>
                
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <h1 className={styles.contactTxt}>Contact Us</h1>
                        <p className={styles.responsiveTxt}>Responsive Movie Rating App</p>
                        <h2>James Robinson</h2>
                        <p>Thank you so much for using our Movie Rating Tracker Webapp! If you have any questions or just want to reach out to us, please
                            contact the company at info@movieratingtracker.com!
                        </p>
                    </div>
                </div>
            </div>
            
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    &copy; 2024 Rowan Web Programming
                </div>
            </footer>
        </div>
    );
}

export default Contact;

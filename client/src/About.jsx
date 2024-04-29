import React from "react";
import { Link } from "react-router-dom";
import styles from './About.module.css';

function About() {
    
    return (
        <div className={styles.pageBackground}>
            <div className={styles.aboutContainer}>
                <div className={styles.navbar}>
                    <div className={styles.navbarLeft}>
                        <h2>Rowan Web Programming</h2>
                    </div>
                    <div className={styles.navbarRight}>
                        <Link to={`/`} className={styles.btn}>Home</Link>
                        <button className={styles.btn}>About</button>
                        <button className={styles.btn}>Contact Us</button>
                    </div>
                </div>
                <br />
                <h2>Welcome to the About Us Page</h2>
                <div className={styles.techContainer}>
                    <div className={styles.techBlock}>
                        <h3><strong>Front-End</strong></h3>
                        <div className={styles.subTechBlock}>
                            <div className={styles.subItem}>
                                <h4>HTML/CSS</h4>
                                <p>Used for structuring and styling web pages.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>React</h4>
                                <p>A JavaScript library for building user interfaces.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Axios</h4>
                                <p>A promise-based HTTP client for making API requests.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Vite</h4>
                                <p>A build tool that aims to provide a faster and leaner development experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techBlock}>
                        <h3><strong>Back-End</strong></h3>
                        <div className={styles.subTechBlock}>
                            <div className={styles.subItem}>
                                <h4>React</h4>
                                <p>A JavaScript library for building user interfaces.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Node.js</h4>
                                <p>A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Express.js</h4>
                                <p>A minimal and flexible Node.js web application framework.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>MongoDB</h4>
                                <p>A NoSQL database for storing data in a JSON-like format.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

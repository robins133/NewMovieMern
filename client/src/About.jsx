import React from "react";
import { Link } from "react-router-dom";
import styles from './About.module.css';

function About() {
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

            <div className={styles.aboutContainer}>
                <div className={styles.techContainer}>
                    <div className={styles.techBlock}>
                        <h3><strong>Front-End</strong></h3>
                        <div className={styles.subTechBlock}>
                            <div className={styles.subItem}>
                                <h4>HTML/CSS</h4>
                                <p>Used for structuring and styling the skeleton of my website. The CSS 
                                    provides the styling to make the website visually appealing and user-friendly.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>React</h4>
                                <p>A JavaScript library for building user interfaces.  Manages 
                                    the state of your application efficiently, making it easier to build complex web applications.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Axios</h4>
                                <p>A promise-based HTTP client for making API requests. Axios simplifies the
                                     process of making asynchronous HTTP requests from the browser, allowing users to easily communicate with a server-side API.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Vite</h4>
                                <p>A build tool that aims to provide a faster and leaner development experience. Vite is used to bundle and optimize your project's assets, such as 
                                    JavaScript, CSS, and images, for production deployment. It offers features like hot module replacement (HMR) for faster development cycles.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.techBlock}>
                        <h3><strong>Back-End</strong></h3>
                        <div className={styles.subTechBlock}>
                            <div className={styles.subItem}>
                                <h4>JavaScript</h4>
                                <p>JavaScript is used on the server-side with Node.js to handle backend logic, such as processing HTTP requests, routing, and interacting with databases.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Node.js</h4>
                                <p>Allows you to run JavaScript code on the server-side, enabling you to 
                                    build scalable and high-performance web applications.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>Express.js</h4>
                                <p>A minimal and flexible Node.js web application framework. Express.js simplifies the process of building web servers and APIs by providing a robust set of features and middleware. 
                                    It allows you to define routes, handle HTTP requests, and implement middleware to enhance your application's functionality.</p>
                            </div>
                            <div className={styles.subItem}>
                                <h4>MongoDB</h4>
                                <p>A NoSQL database for storing data in a JSON-like format. MongoDB is a scalable and flexible database solution that allows you to store and retrieve data in a document-oriented 
                                    manner. It's well-suited for applications that require flexible data models and high scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <p>&copy; 2024 Movie Rating Tracker by James Robinson. All rights reserved.</p>
            </div>
        </div>
    )
}

export default About;

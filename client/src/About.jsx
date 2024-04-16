import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './Contact.css';

function About() {
    
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-left'>
                    <h2>Rowan Web Programming</h2>
                </div>
                <div className='navbar-right'>
                    <Link to={`/`} className='btn btn-warning'>Home</Link>
                    <button>About</button>
                    <button>Contact Us</button>
                </div>
            </div>
            <br/>
            <h2>Welcome to the About Us Page</h2>
            <p></p>
            <h3><strong>Front-End</strong></h3>
            <p>
                In the front end I used a variety of technologies such as html/css, React, Vite, Axios and bootstrap for prototyping.

            </p>
            <h3><strong>Back-End</strong></h3>
            <p>
                In the back end I also used a variety of technologies such as javascript, nodejs, expressjs, MongoDB
                
            </p>
        </div>
    )
}

export default About;
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './Contact.css';

function About() {
    
    return (
        <div className='container'>
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
        </div>
    )
}

export default About;
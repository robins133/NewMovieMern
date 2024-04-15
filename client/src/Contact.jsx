import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './Contact.css';


function Contact() {
    
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
            <div className='image-section'>
                <img src='/movietheater.jpg' alt='Background' />
                <div className='overlay'>
                    <div className='overlay-content'>
                        <h1>Contact Us</h1>
                        <p>Responsive Movie Rating App</p>
                        <p></p>
                        <h2>James Robinson</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt faucibus justo, 
                            tincidunt semper neque euismod sollicitudin. Pellentesque interdum odio quis lobortis vehicula. 
                            Maecenas dictum felis quis nulla convallis imperdiet. Phasellus aliquet efficitur lacinia. In ornare ullamcorper massa. 
                            Donec finibus eu quam nec feugiat. Ut tincidunt interdum mauris, vel placerat ipsum varius ac. Maecenas ut erat leo. 
                            Morbi finibus nisi vel euismod dictum. Praesent pretium, odio et vehicula mollis, ante dui accumsan dolor, sit amet maximus justo erat mollis metus. </p>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
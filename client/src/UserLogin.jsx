import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'

function UserLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    

    //Sends the email and password to the server for authentication. Upon successful authentication, user receives a JWT token which is stored in the local storage.
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email, password})
        .then(result => {
            console.log(result)
            if (result.data.token) {
                localStorage.setItem('token', result.data.token);
                navigate('/'); 
            }
    })
        .catch(err => {
            console.log(err);
            console.log("Login failed. Please try again.");
    })
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
                    <p>If you do not have an account, please create one by clicking below</p>
                    <Link to={`/register/`} className='btn btn-dark'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default UserLogin;
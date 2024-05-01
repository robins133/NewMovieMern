import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateMovie() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        // Check if any field is blank
        if (!title || !genre || !rating) {
            alert('Please fill in all fields');
            return;
        }

        // All fields are filled, proceed with submission
        axios.post("http://localhost:3001/createMovie", { title, genre, rating })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Movie</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='Enter Title' className='form-control'
                            value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder='Enter Genre' className='form-control'
                            value={genre} onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rating</label>
                        <input type="text" placeholder='Enter Rating' className='form-control'
                            value={rating} onChange={(e) => setRating(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateMovie;

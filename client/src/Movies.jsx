import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        document.title = "Movie Rating Tracker";
        axios.get('http://localhost:3001')
        .then(result => setMovies(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteMovie/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    const backgroundStyle = {
        backgroundColor: '#007188', 
        padding: '5rem',
        color: 'white', 

    };

    return (
        <div style={backgroundStyle}>
            <h2>Movie Rating Tracker</h2>
            <h2><button className='btn btn-warning'>Home</button>  <Link to={`/about/`} className='btn btn-warning'>About</Link>  <Link to={`/contact/`} className='btn btn-warning'>Contact Us</Link>  <Link to={`/register/`} className='btn btn-success'>Create New User</Link></h2>
        <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add New Movie </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie, index) => (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.rating}</td>
                                <td>
                                <Link to={`/update/${movie._id}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger' 
                                    onClick={(e) => handleDelete(movie._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Movies;

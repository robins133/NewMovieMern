import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Movies.module.css"; 

function Movies() {
    axios.defaults.withCredentials = true;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Movie Rating Tracker";
        const token = localStorage.getItem("token");

        // If no token is present, navigate to login page
        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:3001", { withCredentials: true })
            .then(response => {
                const data = response.data;
                if (Array.isArray(data) && data.length >= 0) {
                    setMovies(data);
                } else {
                    console.log("Array of movies is less than 0, check Movies.jsx");
                }
            })
            .catch(err => {
                console.log(err);
                console.log("Movies");
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteMovie/" + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(errr => console.log(errr));
    };

    const handleLogout = () => {
        // Clear sessionStorage (token)
        localStorage.removeItem("token");
        // Redirect to login page 
        window.location.href = "/login";
    };

    return (
        <div className={styles.pageBackground}>
            <div className={styles.banner}>
                <div className={styles.navbar}>
                    <img src="/favicon.ico" alt="favicon" />
                    <Link to={`/`} className={`${styles.btn} ${styles.btnWarning}`}>Home</Link>
                    <Link to={`/about/`} className={`${styles.btn} ${styles.btnWarning}`}>About</Link>
                    <Link to={`/contact/`} className={`${styles.btn} ${styles.btnWarning}`}>Contact Us</Link>
                    <button className={`${styles.btn} ${styles.btnDanger3}`} onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className={styles.moviesContainer}>
                <div className={styles.description}>
                    <h3>Movie Rating Tracker</h3>
                    <p>Thanks for using the Movie Rating Tracker! This webapp allows you to track and manage your very own movie collection. You can add, edit, and delete movies, as well as view details about each movie.</p>
                    <p>To get started, use the "Add New Movie" button to add your favorite movies to your collection, give them a genre and a personal rating out of 10. You can then edit or delete movies as needed.</p>
                </div>
                <Link to="/create" className={`${styles.btn} ${styles.btnEdit} ${styles.addMovieButton}`}>Add New Movie</Link>
                <table className={`table ${styles.moviesTable}`}>
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
                                    <Link to={`/update/${movie._id}`} className={`${styles.btn} ${styles.btnEdit}`}>Edit</Link>
                                    <button className={`${styles.btn} ${styles.btnDanger2} ${styles.btnAction}`} onClick={() => handleDelete(movie._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>&copy; 2024 Movie Rating Tracker by James Robinson. All rights reserved.</p>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    );
}

export default Movies;

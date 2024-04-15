import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

function UpdateMovie() {
    const {id} = useParams()
    const [title, setTitle] = useState()
    const [genre, setGenre] = useState()
    const [rating, setRating] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getMovie/'+id)
        .then(result => {
            console.log(result)
            setTitle(result.data.title)
            setGenre(result.data.genre)
            setRating(result.data.rating)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateMovie/"+id, {title, genre, rating})
        .then(result => {
            console.log(result)
            navigate('/')
    })
        .catch(err => console.log(err))
        
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Edit Movie</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='Enter New Title' className='form-control'
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder='Enter New Genre' className='form-control'
                        value={genre} onChange={(e) => setGenre(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Rating</label>
                        <input type="text" placeholder='Enter New Rating' className='form-control'
                        value={rating} onChange={(e) => setRating(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateMovie;
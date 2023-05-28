import { FetchDetails } from "components/API/API";
import React, { useState, useEffect, Suspense } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const MovieDetails = () => {
    const [details, setDetails] = useState(null);
    const { id } = useParams();
    const {
        title = '',
        poster_path = '',
        overview = '',
        genres = [],
        vote_average = ''
    } = details || {};

    useEffect(() => {
        FetchDetails(id).then(setDetails)
    }, [id]);

    const location = useLocation();
    
    
    return (
        <>
            <div>
                <Link to={location.state?.from ?? '/'}>Back</Link>
            </div>
            <div className="card" style={{ width: '50rem' }}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="span">Genre:</span> {genres.map(({ name }) => name).join(', ')}</li>
                    <li className="list-group-item"><span className="span">Rating:</span> {vote_average}</li>
                </ul>
                
            </div>
            <ul style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <Link to="cast" className="card-link">Cast</Link>
                <Link to="reviews" className="card-link">Reviews</Link>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
    
};

export default MovieDetails;



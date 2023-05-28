import { FetchCasts } from "components/API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const Cast = () => {
    const [casts, setCasts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        FetchCasts(id).then(setCasts);
    }, [id]);

    return (
        <ul className="cast-list">
            {casts.map(({ profile_path, name, character, cast_id }) => (
                <li className="list-group-item" key={cast_id}>
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card" style={{ width: '14rem' }}>
                            <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "./images/images.jpg"} className="card-img-top" alt={name} />
                            <div className="card-body">
                                <h5 className="card-text">{name}</h5>
                                <p className="card-text">Character: {character}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

Cast.propTypes = {
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
};

export default Cast;

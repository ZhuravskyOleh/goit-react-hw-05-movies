import { Link, useLocation } from "react-router-dom"

export const MovieList = ({ data }) => {
    const location = useLocation();
    return (
        <ol>
           { data && data.map(({id, title}) => <li key={id}><Link to={`/movies/${id}`} state={{from: location}}>{title}</Link></li>)}
        </ol>
    )
}
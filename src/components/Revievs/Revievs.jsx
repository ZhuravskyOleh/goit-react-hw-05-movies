import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchReview } from "components/API/API";

const Reviews = () => {
    const [reviev, setReviev] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        FetchReview(id).then(setReviev);
    }, [id]);

    if (reviev.length === 0) {
        return <div>There is no reviews</div>
    }
    return (
        <ul className="list-group">
            {reviev.map(({ id, content, author }) => (
                <li className="list-group-item" key={id}>
                    <h5>{author}</h5>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    );
};

export default Reviews;
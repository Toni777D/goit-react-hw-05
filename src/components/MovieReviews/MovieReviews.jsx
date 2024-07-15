import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";

export default function MovieReviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getMovieReviews(movieId);
            setReviews(reviews);
        };
        fetchReviews();
    },[movieId]);

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    )
}
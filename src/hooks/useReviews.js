import { useEffect, useState } from "react";


const useParts = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviewslist')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);


    return [reviews, setReviews];

    }

export default useParts;
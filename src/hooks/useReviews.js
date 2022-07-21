import { useEffect, useState } from "react";


const useParts = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://pc-part-v1.herokuapp.com/reviewslist' , {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);


    return [reviews, setReviews];

    }

export default useParts;
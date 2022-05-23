import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PartDetail = () => {
    const {partId} = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data));
    }, []);
    
    return (
<div className='container'>
            <div className='text-center mt-4'>
            <h2>Vehicle's Name: {part.name}</h2>
            <h3>Description: {part.description}</h3>
            <h3>Price: {part.available}</h3>
            <h3>Quantity: {part.minimum}</h3>
            <h3>Sold: {part.price}</h3>
            </div>
        </div>
    );
};

export default PartDetail;
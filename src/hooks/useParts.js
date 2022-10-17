import { useEffect, useState } from "react";


const useParts = () => {

    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('https://computer-part-seller.onrender.com/partslist')
        .then(res => res.json())
        .then(data => setParts(data));
    }, []);


    return [parts, setParts];

    }

export default useParts;
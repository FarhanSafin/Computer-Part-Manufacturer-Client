import { useEffect, useState } from "react";


const useParts = () => {

    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('https://fathomless-shore-83149.herokuapp.com/partslist')
        .then(res => res.json())
        .then(data => setParts(data));
    }, []);


    return [parts, setParts];

    }

export default useParts;
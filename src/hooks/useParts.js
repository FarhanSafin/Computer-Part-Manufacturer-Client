import { useEffect, useState } from "react";


const useParts = () => {

    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setParts(data));
    }, []);


    return [parts, setParts];

    }

export default useParts;
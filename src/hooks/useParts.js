import { useEffect, useState } from "react";


const useParts = () => {

    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('https://pc-part-v1.herokuapp.com/partslist')
        .then(res => res.json())
        .then(data => setParts(data));
    }, []);


    return [parts, setParts];

    }

export default useParts;
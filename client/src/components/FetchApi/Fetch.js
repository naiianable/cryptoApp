import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {

    const [fetchData, setFetchData] = useState([]);

    useEffect(() => {
        axios.get(url)
         .then((res) => {
             setFetchData(res.data)
             //console.log(res.data)
         })
         .catch((err) => console.log(err)); 
     }, [url]);

    return (
        fetchData
    )
}

export default useFetch

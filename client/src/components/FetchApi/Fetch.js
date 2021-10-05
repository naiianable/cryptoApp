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

    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((data) => {
    //         // console.log('THIS IS COIN DATA IN FETCH', data);
    //         return setFetchData(data);
    //     });
    
    // }, [url]);

    // console.log('THIS IS GET DATA', fetchData)

    return (
        fetchData
    )
}

export default useFetch

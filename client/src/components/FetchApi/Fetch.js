import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [fetchData, setFetchData] = useState([]);

    // const getCoinData = async () => {
    //     const res = await fetch('http://localhost:5000/coins');
    //     const data = await res.json();
    //     setCoinData(data);
    // }
    
   
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            // console.log('THIS IS COIN DATA IN FETCH', data);
            return setFetchData(data);
        });
    
    }, [url]);

    // console.log('THIS IS GET DATA', fetchData)

    return (
        fetchData
    )
}

export default useFetch

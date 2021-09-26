import React, { useState, useEffect } from 'react'


const Coins = () => {

    const [coinData, setCoinData] = useState([]);

    const getCoinData = async () => {
        const res = await fetch('http://localhost:5000/coins');
        const data = await res.json();
        setCoinData(data);
    }

    useEffect(() => {
        getCoinData()
    }, [])

    console.log('THIS IS COIN DATA', coinData)

    // fetch data from server /coins
    // render data in return below
    // useEffect(() => {
    //     fetch('http://localhost:5000/coins')
    //     .then(res => {
    //         console.log(res.json())
    //         return res.json()
    //     })
    //     .then(data => {
    //         setCoinData(data);
    //         //console.log('THIS IS DATA', data)
    //     })
    //     .catch(err => console.log(err));
    // }, []);

    // console.log('THIS IS THE DATA', coinData)
    
//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//       };

//     fetch("http://localhost:5000/coins", requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

    return (
        <div>
            <body>
                <tr>
                    <th>COIN</th>
           
                    <th>PRICE</th>
         
                    <th>CHANGE</th>

                    
                </tr>
                {coinData.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                    
                        <td>{coin.current_price}</td>
                    
                        <td>{coin.price_change_24h}</td>

                        
                    </tr>
                ))}
            </body>
                
                
        </div>
    )
}

export default Coins




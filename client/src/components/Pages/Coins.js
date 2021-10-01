import React, {  useState, useEffect } from 'react';
//import axios from 'axios';
import useFetch from '../FetchApi/Fetch';

const Coins = () => {

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h';

    let coinData = useFetch(url);
    
    console.log('THIS IS FETCH DATA', coinData)

    


    return (
        <>
            <body>
                <tr>
                    <td>COIN</td>
           
                    <td>PRICE</td>
         
                    <td>CHANGE</td>

                    
                </tr>
                {coinData.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                    
                        <td>{coin.current_price}</td>
                    
                        <td>{coin.price_change_24h}</td>

                        
                    </tr>
                ))}
            </body>
                
                
        </>
    )
}

export default Coins




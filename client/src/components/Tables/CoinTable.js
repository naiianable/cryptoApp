import React from 'react'
import useFetch from '../FetchApi/Fetch';
import AddCoin from './User/AddCoin';

import '../Pages/coins.css';

const CoinTable = () => {

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinData = useFetch(url)

    //console.log('THIS IS FETCH DATA', coinData)
    
    return (
        <>
            {coinData.map(coin => 
                <tr style={{textAlign: 'center'}} key={coin.id}>
                    
                    <AddCoin coin={coin} />
            
                    <td className="rank">{coin.market_cap_rank}</td>
                    <td className='coin-name'><img className="logo" src={coin.image} alt=""/>{coin.name}</td>
                    <td>{coin.id}</td>      
                    <td>{coin.symbol}</td>                     
                    <td>${coin.current_price.toFixed(2)}</td>
                    <td>${coin.price_change_24h.toFixed(2)}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                </tr>                 
            )}
        </>
    )
}

export default CoinTable;

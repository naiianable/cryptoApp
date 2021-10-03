import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Fetch from '../FetchApi/Fetch';

const List = () => {

    const [userCoins, setUserCoins] = useState([]);

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinApi = Fetch(url);

    console.log('THIS IS TEMP', coinApi)

    let body = JSON.stringify({
        token: cookies.get('token')
    });

    useEffect(() => {
        fetch('http://localhost:5000/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        .then(res => res.json())
        .then(data => {
            setUserCoins(data);
            //console.log('THIS IS USERCOINS', data);
        })
        .catch(err => console.log(err))  
    }, [body])

    let coinArray = [];
        userCoins.forEach(userCoin => {
            for(let coinName in userCoin) {
                coinApi.filter(coin => {
                    if(coinName === coin.id) {
                        coinArray.push(coin)
                    }
                   //console.log(coin.id) 
                }) 
            }
            //console.log('USERLIST', userList)
        })

        console.log('THIS IS USERCOINS', userCoins)
        console.log('COIN ARRAY', coinArray)

    return (
        <>
            <h1 className="text-center display-2">User Coins</h1>
            
            <div className="row justify-content-center"> 
    
                <table className="table">
                   
                    <thead >
                        <tr style={{textAlign: 'center'}}>
                            <th></th>
                            <th>RANK</th>
                            <th style={{width: '15%'}}>NAME</th>
                            <th>COIN</th>             
                            <th>SYMBOL</th>
                            <th>PRICE</th>
                            <th>24H PRICE CHANGE</th>
                            <th>24H % CHANGE</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {coinArray.map(coin => 
                        <tr style={{textAlign: 'center'}} key={coin.id}>
                 
                            <td className='add-coin' id={coin.id} >
                                <FontAwesomeIcon  icon={faPlusSquare} style={{ color: 'MediumAquaMarine'}}/>
                            </td>
                      
                            <td className="rank">{coin.market_cap_rank}</td>
                            <td className='coin-name'><img className="logo" src={coin.image} alt=""/>{coin.name}</td>
                            <td>{coin.id}</td>      
                            <td>{coin.symbol}</td>                     
                            <td>${coin.current_price.toFixed(2)}</td>
                            <td>${coin.price_change_24h.toFixed(2)}</td>
                            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                        </tr>                 
                    )}
                </tbody>
                   
                </table>  
    
                </div>
        </>
    )
}

export default List

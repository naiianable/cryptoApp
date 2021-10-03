// import React, {  useState, useEffect } from 'react';
import useFetch from '../FetchApi/Fetch';
import cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import './coins.css';


const Coins = () => {


    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinData = useFetch(url)

    
    console.log('THIS IS FETCH DATA', coinData)

    
    const saveFunc = (e) => {

        //locate user data

        let coinInfo = JSON.stringify({
            id: e.target.id,
            user: cookies.get('token')
        })
    
        fetch('http://localhost:5000/coins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: coinInfo
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))
        //post request to save coin id
        console.log('THIS IS ID FROM CLICK', e.target.id)
        // history.push('myList');
    };

    return (
        <>

        <h1 className="text-center display-2">Coins</h1>
            
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
                    {coinData.map(coin => 
                        <tr style={{textAlign: 'center'}} key={coin.id}>
                 
                            <td className='add-coin' id={coin.id} onClick={saveFunc} >
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

export default Coins




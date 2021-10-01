import React, {  useState, useEffect } from 'react';
import useFetch from '../FetchApi/Fetch';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';


const Coins = () => {

    const history = useHistory();

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h';

    let coinData = useFetch(url)

    
    console.log('THIS IS FETCH DATA', coinData)

    
    const saveFunc = () => {
        history.push('myList');
    };

    return (
        <>

        <h1 className="text-center display-2">Coins</h1>
            
        <div className="table-responsive"> 

            <Table striped bordered hover size="sm">
               
                <thead>
                    <tr>
                        <th></th>
                        <th>RANK</th>
                        <th>COIN</th>
                        <th>NAME</th>
                        <th>SYMBOL</th>
                        <th></th>
                        <th>PRICE</th>
                        <th>24H CHANGE</th>
                        <th>MARKET CAP</th>
                    </tr>
                </thead>
                
                <tbody>
                    {coinData.map(coin => 
                        <tr key={coin.id}>
                            <td style={{textAlign: 'center'}}><FontAwesomeIcon onClick={saveFunc} icon={faPlusSquare} style={{ color: 'MediumAquaMarine'}}/></td>
                            <td>{coin.market_cap_rank}</td>
                            <td>{coin.id}</td>      
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>                     
                            <td>$</td>
                            <td>{coin.current_price}</td>
                            <td>{coin.price_change_24h}</td>
                            <td>{coin.market_cap}</td>
                        </tr>                 
                    )}
                </tbody>
               
            </Table>  

            </div>
        </>
    )
}

export default Coins




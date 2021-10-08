import React from 'react'

import UserTable from '../Tables/UserTable';
import Fetch from '../FetchApi/Fetch';

const List = () => {


    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinApi = Fetch(url);

    return (
        <>
            <h1 className="text-center display-2">User Coins</h1>


            {/* {errorMsg && 
                <div className="d-flex justify-content-center">
                    <div className="alert alert-danger" role="alert"> {errorMsg} </div>
                </div>
                } */}
            
            <div className="row justify-content-center"> 
    
                <table className="table">
                   
                    <thead >
                        <tr style={{textAlign: 'center'}}>
                            {/* <th style={{width: '10%'}}></th> */}
                            <th style={{width: '10%'}}>AMOUNT</th>
                            <th style={{width: '15%'}}>NAME</th>
                            <th >COIN</th>             
                            <th >SYMBOL</th>
                            <th >PRICE</th>
                            <th >24H PRICE CHANGE</th>
                            <th >24H % CHANGE</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody >   
                        <UserTable coinApi={coinApi} />
                    </tbody>
                   
                </table>  
    
                </div>
        </>
    )
}

export default List

// import React, {  useState, useEffect } from 'react';
import cookies from 'js-cookie';
import CoinTable from '../Tables/CoinTable';

import './coins.css';



const Coins = () => {

    return (
        <>

        <h1 className="text-center display-2">Coins</h1>
            
        <div className="row justify-content-center"> 

            <table className="table">

                <thead >
                    <tr style={{textAlign: 'center'}}>
                        {cookies.get('loggedIn') &&
                        <th></th>
                        }
                        
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
                    <CoinTable />
                </tbody>
               
            </table>  

            </div>
        </>
    )
}

export default Coins




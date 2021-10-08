import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie';
import AmountInput from './AmountInput';
import DeleteCoin from './DeleteCoin';
import TableData from './TableData';

import './table.css'



const UserTable = (props) => {

    const [userCoins, setUserCoins] = useState([]);

    useEffect(() => {
        let body = JSON.stringify({
            token: cookies.get('token'),
            type: 'onPageLoad'
        });
        
        fetch('http://localhost:5000/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        .then(res => res.json())
        .then(data => {
            setUserCoins(data)
            //console.log('THIS IS USER COINS', data)
        })
        .catch(err => console.log(err)) 
    }, [])
    //console.log(userCoins)

    let displayArray = [];
        userCoins.forEach(userCoin => {
            for(let coinName in userCoin) {
                props.coinApi.forEach(coin => {
                    if(coinName === coin.id) {
                        displayArray.push(coin)
                    }
                }) 
            }
            //console.log('USERLIST', userList)
        })

        // console.log('THIS IS USERCOINS', userCoins)
        //console.log('COIN ARRAY', displayArray)

        
        function coinAmount(c) {
            props.userCoins.forEach(coin => {
                for(let coinName in coin) {
                    if(coinName === c) {
                        console.log('COINNAME', coin[coinName])
                        return coin[coinName]
                    }
                }
            })
        }
        //console.log('THIS IS DISPLAY ARRAY', displayArray)





    return (
        <>
            {displayArray.map(coin => 
                <tr className="align-middle text-center"   key={coin.id}>
               
                    <AmountInput coin={coin}/>
                
                    <TableData coin={coin} />

                    <DeleteCoin coin={coin} setUserCoins={setUserCoins} />
            </tr>  

            )}
               
        
        </>
    )
}

export default UserTable;

import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie';
import Fetch from '../FetchApi/Fetch';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaRegSave } from 'react-icons/fa';
import './coins.css'


const List = () => {

    const [userCoins, setUserCoins] = useState([]);
    const [amount, setAmount] = useState('');
    const [saveIcon, setSaveIcon] = useState(null);
    const [coinId, setCoinId] = useState('');
    

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinApi = Fetch(url);

    //console.log('THIS IS TEMP', coinApi)

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
            setUserCoins(data.userCoins);
            //console.log('THIS IS USERCOINS', data);
        })
        .catch(err => console.log(err))  
    }, [body])

    let displayArray = [];
        userCoins.forEach(userCoin => {
            for(let coinName in userCoin) {
                coinApi.forEach(coin => {
                    if(coinName === coin.id) {
                        displayArray.push(coin)
                    }
                   //console.log(displayArray) 
                }) 
            }
            //console.log('USERLIST', userList)
        })

        // console.log('THIS IS USERCOINS', userCoins)
        // console.log('COIN ARRAY', displayArray)

    
       let iconAppear = (e) => {
        console.log(e.target.id)
            setAmount(e.target.value);
            setCoinId(e.target.id)
       } 
    
    useEffect(() => {
        if(amount.length > 0) {
                setSaveIcon(true)
                console.log('Make icon appear')
            } else {
                setSaveIcon(false)
                console.log('NO MAKE APPEAR')
            }

        console.log('THIS IS SAVE AMOUNT', amount) 
    }, [amount])
    

    let saveAmount = (e) => {
        console.log('SAVE THIS AMOUNT')
    }


    let deleteCoin = (e) => {

        body = JSON.stringify({
            id: e.target.id,
            type: 'delete',
            token: cookies.get('token')
        })
        
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
            console.log('THIS IS DATA', data)
        
        })

        console.log('THIS IS DELETE COIN', body)
    }

    return (
        <>
            <h1 className="text-center display-2">User Coins</h1>
            
            <div className="row justify-content-center"> 
    
                <table className="table">
                   
                    <thead >
                        <tr style={{textAlign: 'center'}}>
                            
                            <th style={{width:'5%'}}>AMOUNT</th>
                            {saveIcon &&
                                <th></th>
                            }
                            
                            <th style={{width: '15%'}}>NAME</th>
                            <th>COIN</th>             
                            <th>SYMBOL</th>
                            <th>PRICE</th>
                            <th>24H PRICE CHANGE</th>
                            <th>24H % CHANGE</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {displayArray.map(coin => 
                        

                        <tr style={{textAlign: 'center'}} key={coin.id}>
                           
                            <input className="amount" id={coin.id} type="text" maxLength="7" onChange={iconAppear}/>

                        {saveIcon &&
                            <td><FaRegSave style={{ color: 'PowderBlue'}} onClick={saveAmount}  /> </td>}


                            <td className='coin-name'><img className="logo" src={coin.image} alt=""/>{coin.name}</td>
                            <td>{coin.id}</td>      
                            <td>{coin.symbol}</td>                     
                            <td>${coin.current_price.toFixed(2)}</td>
                            <td>${coin.price_change_24h.toFixed(2)}</td>
                            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>

                            <td className='add-coin' id={coin.id} onClick={deleteCoin} >
                                <FaRegTimesCircle style={{ color: 'Red'}}/>
                            </td>

                            
                        </tr>  
                                  
                    )}
                </tbody>
                   
                </table>  
    
                </div>
        </>
    )
}

export default List

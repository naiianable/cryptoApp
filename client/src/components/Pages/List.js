import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie';
import Fetch from '../FetchApi/Fetch';
import { FaRegTimesCircle } from 'react-icons/fa';
import { MdOutlineSaveAlt } from 'react-icons/md';
import './coins.css'
import axios from 'axios';


const List = () => {

    const [userCoins, setUserCoins] = useState([]);
    const [amount, setAmount] = useState('');
    const [saveIcon, setSaveIcon] = useState(false);
    const [coinId, setCoinId] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h';

    let coinApi = Fetch(url);

    //console.log('THIS IS TEMP', coinApi)

    

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
            console.log('THIS IS INITIAL RENDER', data)
        })
        .catch(err => console.log(err)) 


    }, [])
    console.log(userCoins)

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
    //console.log(e.target.id)
        setAmount(e.target.value);
        setCoinId(e.target.id)
    } 
    
    useEffect(() => {
        if(amount.length > 0) {
                setSaveIcon(true)
                // console.log('Make icon appear')
            } else {
                setSaveIcon(false)
                // console.log('NO MAKE APPEAR')
            }

        //console.log('THIS IS SAVE AMOUNT', amount) 
    }, [amount])
    
    
    let saveAmount = (e) => {

        let body = {
            id: e.target.id,
            amount: amount,
            type: 'update',
            token: cookies.get('token')
        }
        console.log('THIS IS BODY', body)
        
        axios.post('http://localhost:5000/list', body)
        .then(res => {
            console.log('THIS IS THE SAVE RESPONSE', res)
            if(res.data.msg) {
                setErrorMsg(res.data.msg);
            } else {
                console.log('USER COINS', res.data)
            }
        })
        .catch(err => console.log(err))
    }


    let deleteCoin = (e) => {

        let body = JSON.stringify({
            amount: amount,
            type: 'delete',
            id: e.target.id,
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
            setUserCoins(data.userCoins)
               setErrorMsg(data.errorMsg) 
          
            
            console.log('THIS IS DATA', data)
        
        })
    }

    function coinAmount(c) {
        userCoins.forEach(coin => {
            for(let coinName in coin) {
                if(coinName === c) {
                    console.log('COINNAME', coin[coinName])
                    return coin[coinName]
                }
            }
        })
    }
    console.log('THIS IS DISPLAY ARRAY', userCoins)

    return (
        <>
            <h1 className="text-center display-2">User Coins</h1>

            {errorMsg && 
                <div className="d-flex justify-content-center">
                    <div className="alert alert-danger" role="alert"> {errorMsg} </div>
                </div>
                }
            
            <div className="row justify-content-center"> 
    
                <table className="table">
                   
                    <thead >
                        
                        <tr style={{textAlign: 'center'}}>
                            
                            <th style={{width:'5%'}}>AMOUNT</th>
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
                    {displayArray.map(coin => 
                        <tr className="align-middle text-center"   key={coin.id}>
                           
                            <td>
                                <input className="form-control" id={coin.id} type="text" maxLength="10" onChange={iconAppear} value={coinAmount(coin.id)} />
                                    {saveIcon && coinId === coin.id &&
                                    <>
                                        <td ><MdOutlineSaveAlt className="add-coin" style={{ color: 'PowderBlue'}} id={coin.id} onClick={saveAmount} /> </td>
                                        {/* <td><FaBeer style={{ color: 'Tomato'}} id={coin.id}  /> </td>
                                        <td><FaAngellist style={{ color: 'Lime'}} id={coin.id} /> </td>
                                        <td><FaEgg style={{ color: 'PaleGoldenRod'}} id={coin.id} /> </td> */}
                                    </>}
                            </td>

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

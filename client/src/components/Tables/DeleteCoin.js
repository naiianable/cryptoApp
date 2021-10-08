import React, { useState } from 'react'
import cookies from 'js-cookie';
import { FaRegTimesCircle } from 'react-icons/fa';

const DeleteCoin = (props) => {

    //const [statusMsg, setStatusMsg] = useState('');

    let deleteCoin = (e) => {
    
        let body = JSON.stringify({
            // amount: amount,
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
            props.setUserCoins(data.userCoins)
            //setStatusMsg(data.statusMsg)
            
            console.log('THIS IS DATA', data)
        
        })
    }


    return (
        <td className='add-coin' id={props.coin.id} onClick={deleteCoin} >
            <FaRegTimesCircle style={{ color: 'Red'}}/>
        </td>
    )
}

export default DeleteCoin

import React from 'react'
import cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const AddCoin = ({ coin }) => {

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
            {cookies.get('loggedIn') &&
            <td className='add-coin' id={coin.id} onClick={saveFunc} >
                <FontAwesomeIcon  icon={faPlusSquare} style={{ color: 'MediumAquaMarine'}}/>
            </td>
            }
        </>
    )
}

export default AddCoin

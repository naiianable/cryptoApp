import React, { useState, useEffect } from 'react'
import cookies from 'js-cookie';
import axios from 'axios';
import { MdOutlineSaveAlt } from 'react-icons/md';

const InputAmount = (props) => {

    const [amount, setAmount] = useState('');
    const [saveIcon, setSaveIcon] = useState(false);
    const [coinId, setCoinId] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [showInput, setShowInput] = useState(false);
    
    
    let iconAppear = (e) => {
        //console.log(e.target.id)
        setAmount(e.target.value);
        setCoinId(e.target.id);      
    } 

        console.log('THIS IS AM0UNT', amount)
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
            if(res.data.errorMsg) {
                setStatusMsg(res.data.errorMsg);

            } else if(res.data.successMsg){
                setStatusMsg(res.data.successMsg);
                setShowInput(false);
                setSaveIcon(false);
                
                console.log('USER COINS', res.data)
            }
            setTimeout(() => {
                setStatusMsg('')
                }, 3000)
                
        })
        .catch(err => console.log(err))
    }
    // console.log('THIS IS COIN', props.coin)

    let displayInput = () => {
        setShowInput(true);
    }
    
    return (
   
            <td>

                {statusMsg === 'Try again...' && coinId === props.coin.id &&
                    <div id={props.coin.id} style={{fontSize: 'x-small', color: 'red'}}>
                        {statusMsg}  
                    </div>  
                }

                {statusMsg === 'Coin saved!' && coinId === props.coin.id &&
                    <div id={props.coin.id} style={{fontSize: 'x-small', color: 'green'}}>
                        {statusMsg}
                    </div>  
                }
                
                {/* <div>{coinAmount(coin.id)}</div> */}
                
                {showInput ?
                <input className="form-control" id={props.coin.id} type="text" maxLength="10" onChange={iconAppear} />
                :
                
                <td className="d-flex justify-content-center" onClick={displayInput}>{props.coin.amount}</td>
                }
                    {saveIcon && coinId === props.coin.id &&
                    <>  
                        <MdOutlineSaveAlt className="add-coin" style={{ color: 'PowderBlue'}} id={props.coin.id} onClick={saveAmount} /> 
                    </>} 

            </td>
            
    )
}

export default InputAmount;

import React from 'react'

const TableData = (props) => {

    let total = (props.coin.amount * props.coin.current_price).toFixed(2)

    return (
        <>
            {/* <td id={coin.id}>{coinAmount(coin.id)}</td> */}
            <td className='coin-name'><img className="logo" src={props.coin.image} alt=""/>{props.coin.name}</td>
            <td>{props.coin.id}</td>      
            <td>{props.coin.symbol}</td>                     
            <td>${props.coin.current_price.toFixed(2)}</td>
            <td>${props.coin.price_change_24h.toFixed(2)}</td>
            <td>{props.coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${total}</td>

            {/* <td className='add-coin' id={coin.id} onClick={deleteCoin} >
                <FaRegTimesCircle style={{ color: 'Red'}}/>
            </td>
            */}
        </>
    )
}

export default TableData

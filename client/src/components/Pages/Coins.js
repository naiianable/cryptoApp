import React from 'react'
import useFetch from '../FetchApi/Fetch';

const Coins = () => {

    // const [coinData, setCoinData] = useState([]);

    let url = 'http://localhost:5000/coins';

    let coinData = useFetch(url);
    
    console.log('THIS IS TEMP', coinData)
    

    
    // useEffect(() => {
       
    // }, [])
    // const getCoinData = () => {
    //     fetch('http://localhost:5000/coins')
    //         .then(res => res.json())
    //         .then((data) => {
    //             // console.log('THIS IS COIN DATA IN FETCH', data);
    //             setCoinData(data);
    //     });
    // };

    // useEffect(() => {
    //     getCoinData()
    // }, []);

    // console.log('THIS IS COIN DATA', coinData)

    return (
        <div>
            <body>
                <tr>
                    <th>COIN</th>
           
                    <th>PRICE</th>
         
                    <th>CHANGE</th>

                    
                </tr>
                {coinData.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.name}</td>
                    
                        <td>{coin.current_price}</td>
                    
                        <td>{coin.price_change_24h}</td>

                        
                    </tr>
                ))}
            </body>
                
                
        </div>
    )
}

export default Coins




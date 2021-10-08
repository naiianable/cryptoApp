import React from 'react'
import UserTable from '../Tables/UserTable';


const List = () => {


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
                        <UserTable />
                    </tbody>
                   
                </table>  
    
                </div>
        </>
    )
}

export default List

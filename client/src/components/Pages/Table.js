// import React, {  useState, useEffect } from 'react';
// import useFetch from '../FetchApi/Fetch';

// import { useTable } from 'react-table';


// const Table = () => {

    

//     let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h';

//     let coinData = useFetch(url)

    
//     console.log('THIS IS FETCH DATA', coinData)

//         const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'ID',
//                 accessor: 'id'
//             },
//             {
//                 Header: 'Symbol',
//                 accessor: 'coin.symbol'
//             },
//             // {
//             //     Header: 'Current Price',
//             //     accessor: coinData.map(coin => coin.current_price)
//             // },
//             // {
//             //     Header: '24hr Price Change',
//             //     accessor: coinData.map(coin => coin.price_change_24h)
//             // },
//         ], [])

//     const data = React.useMemo(() => coinData, [])

//     const tableInstance = useTable({
//         columns: columns,
//         data: data
//     })

// console.log('THESE ARE COLUMNS', columns)    

        
//     const { 
//         getTableProps, 
//         getTableBodyProps, 
//         headerGroups, 
//         rows, 
//         prepareRow
//      } = tableInstance
    


//     return (
//         <>

//             <table {...getTableProps()}>
//                 <thead>
//                     {
//                         headerGroups.map(headerGroup => {
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {
//                                     headerGroup.headers.map( column => (
//                                       <th {...column.getHeaderProps}>{column.render('Header')}</th>  
//                                     ))
//                                 }                               
//                             </tr>

//                         })
//                     }
                    
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {
//                         rows.map(row => {
//                             prepareRow(row)
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {row.cells.map((cell) => {
//                                         return <td {...cell.getCellProps}>{cell.render('Cell')}</td>
//                                     })}
                                    
//                                 </tr>
//                             )
//                         })
//                     }
                    
//                 </tbody>
//             </table>
                
                
//         </>
//     )
// }

// export default Table

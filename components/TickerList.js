import React from 'react'
import StockChart from './stockChart'

const TickerList = ({data}) => {
    return (
        <>
            {data.map((stock, key) =>(
                <StockChart key={key} stock={stock}/>
            ))}
        </>
    )
}

export default TickerList

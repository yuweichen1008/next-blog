import React from 'react'
import StockChart from './stockChart'

const TickerList = ({data}) => {
    return (
        <div className="space-y-2">
            {data.map((stock, key) =>(
                <StockChart key={key} stock={stock}/>

            ))}
        </div>
    )
}

export default TickerList

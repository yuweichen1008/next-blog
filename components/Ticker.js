import React from 'react'

const Ticker = ({ stocks}) => {
    return (
        <div>
            {stocks.map((stock, index) => (
                <Task key={index} task={stock} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Ticker

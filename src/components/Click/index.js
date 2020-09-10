import React from 'react'

export default function Click() {
    const [ valueClick, setValueClick ] = React.useState(0)
    const increment = () => {
        setValueClick(valueClick + 1 )
    }
    const decrement = () => {
        setTimeout(()=>{
            setValueClick(valueClick -1 )
        },300)
    }
    return (
        <div className="click">
            <button onClick={increment}>Up</button>
            <button onClick={decrement}>Down</button>
            <h2 data-testid="counter-value">{valueClick}</h2>
        </div>
    )
}
